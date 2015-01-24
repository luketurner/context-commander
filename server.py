# requires flask
# basic example web server for serving .reg files
# client can access any filename with GET request,
# and the content of the file is generated based on query
# parameters. For example, one might do:
# GET /install.reg?name=Something&text=Click+me&command=cmd.exe+%1&extension=.txt&extension=.nfo

from flask import Flask, request, make_response, render_template
from contextext import ContextEntry

app = Flask(__name__)

@app.route('/reg/<filename>')
def reg(filename):
    entry = ContextEntry(name=request.args["name"] if "name" in request.args else "",
                         text=request.args["text"] if "text" in request.args else "",
                         command=request.args["command"] if "command" in request.args else "",
                         extensions=request.args.getlist("extension") if "extension" in request.args else set())
    if "for" in request.args and request.args["for"] == "uninstall":
        response = make_response(entry.removal_diff)
    else:
        response = make_response(entry.install_diff)
    response.headers["Content-Type"] = 'text/plain; charset="utf-8"'
    response.headers["Content-Disposition"] = "attachment"
    return response
