import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Endpoint para retornar uma lista de acomodações
@app.route('/properties', methods=['GET'])
def get_propertys():
    cidade = request.args.get('cidade')
    conn = get_db_connection()
    if cidade:
        rental = conn.execute('SELECT * FROM rental_properties WHERE localizacao LIKE ?', ('%' + cidade + '%',)).fetchall()
    else:
        rental = conn.execute('SELECT * FROM rental_properties').fetchall()
    properties = [dict(row) for row in rental]
    return jsonify(properties)

# Endpoint para retornar detalhes de uma acomodação específica
@app.route('/properties/<int:id>', methods=['GET'])
def get_property(id):
    conn = get_db_connection()
    rental = conn.execute('SELECT * FROM rental_properties WHERE id = ?', (id,)).fetchone()
    if rental is None:
        return jsonify({'error': 'Property not found'}), 404
    return jsonify(dict(rental))

def get_db_connection():
    conn = sqlite3.connect('./DataBase/database.db')
    conn.row_factory = sqlite3.Row
    return conn

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
