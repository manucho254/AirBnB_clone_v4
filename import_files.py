#!/usr/bin/python3
import shutil

# Specify the source and destination directories
src_templates = 'web_flask/templates'
dest_templates = 'web_dynamic/templates'

# Copy the 'templates' directory
shutil.copytree(src_templates, dest_templates)
