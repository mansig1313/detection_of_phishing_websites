from detection_of_phishing_websites.trial import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the saved model
model = joblib.load('model.ipynb')

@app.route('/detect', methods=['POST'])
def detect_phishing():
    data = request.json  # Assuming JSON data containing the URL
    url = data['url']

    # Preprocess the input data (e.g., vectorize the URL)
    preprocessed_data = preprocess_data(url)

    # Make predictions using the loaded model
    prediction = model.predict([preprocessed_data])[0]

    # Return the prediction result
    return jsonify({'is_phishing': bool(prediction)})

def preprocess_data(url):
    # Hypothetical function to preprocess the URL
    # You need to implement this based on your model requirements
    # For example, you might tokenize the URL, extract features, etc.
    return url

if __name__ == '__main__':
    app.run(debug=True)  # Run Flask app in debug mode
