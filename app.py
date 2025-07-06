from flask import Flask, render_template, request, jsonify
import requests
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    question = data.get("question")

    response = requests.post("https://api.puter.com/v2/chat", json={"prompt": question})
    result = response.json().get("response", "No response from AI.")
    return jsonify({"answer": result})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
