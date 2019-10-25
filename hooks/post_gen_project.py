import os

# listing directories
print("The dir is: %s" % os.listdir(os.getcwd()))

source = os.path.join('projects', 'rename_to_project_slug')
destination = os.path.join('projects', '{{ cookiecutter.project_slug }}')

# renaming directory
os.rename(source, destination)

print("Successfully renamed.")
