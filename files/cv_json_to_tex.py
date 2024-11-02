"""
This script converts a JSON CV file into LaTeX to be used with the Resumay
document class

TODO:
- Capitalization of comments
- Full compatibility with JSON Resume
- clean_html

"""

from sys import argv
import json
import warnings

from bs4 import BeautifulSoup

OPENING = """

This script is designed to take a JSON file and produce it to a .tex file
compatible with the Resumay LaTeX class. Be warned that the resulting output may
require some tweaking.

Released under MIT License.
Cameron McGarry 2019

"""

HEADER = """
\\documentclass[sans]{{{latex_class}}}

\\name{{{name}}}
\\email{{{email}}}
\\underlinetitle

\\begin{{document}}

\\maketitle

"""

POSITION_TEXT = """
\\begin{{{type}}}{{{title}}}{{{start}}}{{{end}}}{{{skills_string}}}
"""

TAIL = """
\\end{document}
"""


def clean_html(text):
    soup = BeautifulSoup(text, features='lxml')
    for m in soup.find_all('a'):
        m.replaceWithChildren()
    return soup.get_text()

def retrieve_fields(data, fields, optional_fields=[]):
    """
    Takes a dictionary (data) and list of fields. Returns the subset of data
    containing the specified fields. Any optional fields that are not present
    are replaced with an empty string.
    """
    output_fields = {}
    for field in fields:
        if field not in data.keys() and field not in optional_fields:
            warnings.warn(f'Field {field} not found', UserWarning)
        elif field not in data.keys() and field in optional_fields:
            output_fields[field] = ''
        else:
            output_fields[field] = data[field]
    return output_fields

def make_title(position):
    t = [position['title']]
    if 'subtitle' in position.keys():
        t.append(position['subtitle'])
    return ', '.join(t)

def make_skills_string(position):
    """
    Take a position dictionary and build the skills list. Ensure the list
    separator is not a comma if there is a comma in one of the skill items
    """
    if not 'skills' in position.keys():
        return ''
    # Seprator
    separator = ', ' # Default separator is comma
    skills = position['skills']
    for skill in skills:
        if ',' in skill:
            separator = '; ' # If there is a comma in a skill then change to ;
    return separator.join(skills)

def make_position_body(position):
    """
    Construct position body from comments list.
    TODO: Allow non list type bodies
    """
    text = ''
    for comment in position['comments']:
        comment = clean_html(comment)
        text += '\\item {}\n'.format(comment)
    return text + '\\end{positionlist}\n'

def main():
    """
    """

    print(OPENING)

    if len(argv) > 1:
        json_file = argv[1]
    else:
        json_file = 'cv.json'

    with open(json_file) as f:
        cv = json.load(f)

    header_fields = retrieve_fields(
            cv['basics'],
            ['latex_class', 'name', 'email']
            )
    text = HEADER.format(**header_fields)

    for section in cv['sections']:
        text += '\n\\section{{{}}} \n'.format(section['title'])
        for position in section['positions']:
            position_fields = retrieve_fields(
                    position,
                    ['title', 'subtitle', 'start', 'end', ],
                    ['subtitle', 'end']
                    )
            position_fields['title'] = make_title(position)
            position_fields['skills_string'] = make_skills_string(position)
            position_fields['type'] = 'positionlist' # TODO Allow other types
            text += POSITION_TEXT.format(**position_fields)
            text += make_position_body(position)

    text += TAIL

    # Output
    if len(argv) > 2:
        output_file = argv[2]
    else:
        output_file = 'cv.tex'

    try:
        f = open(output_file)
        print('Output file already exists, this is not permitted')
        quit()
    except FileNotFoundError:
        # File does not exist so continue
        pass

    with open(output_file, 'w') as f:
        response = input(f'Write to ./{output_file}? (Y/n)')
        if response == 'Y':
            f.write(text)
        else:
            print('Exiting')


if __name__ == '__main__':
    main()
