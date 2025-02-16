from flask import Flask, render_template

app = Flask(__name__)

# Route for Home page
@app.route('/')
def home():
    return render_template('index.html')

# Route for Account page
@app.route('/Account', methods=['GET'])
def show_Account_page():
    return render_template("Account.html")

# Route for Contact page
@app.route('/Contact', methods=['GET'])
def show_Contact_page():
    return render_template("Contact.html")

# Route for About page
@app.route('/About', methods=['GET'])
def show_About_page():
    return render_template("About.html")

# Route for About page
@app.route('/Products', methods=['GET'])
def show_Products_page():
    return render_template("Products.html")

# Route for Product Detail (White T-Shirt)
@app.route('/product-detail-white', methods=['GET'])
def show_product_detail_white():
    return render_template('product-detail-white.html')

if __name__ == '__main__':
    app.run(debug=True)

