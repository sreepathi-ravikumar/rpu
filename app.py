from flask import Flask, request, jsonify, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    question = data.get("question")

    # Call puter API
    response = requests.post(
        "https://api.puter.com/v2/chat",
        json={"prompt": question}
    )

    reply = response.json().get("response", "No response from AI.")
    return jsonify({"answer": reply})

if __name__ == '__main__':
    app.run(debug=True)
