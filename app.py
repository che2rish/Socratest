from flask import Flask, render_template, redirect, request, url_for, jsonify

app = Flask(__name__)

TEMPLATE_DICT = {
    0 : '공포.html',
    1 : 'result1.html',
    2 : 'result2.html',
    3 : 'result3.html',
}

@app.route('/', methods=['GET','POST'])
def index():
    return render_template('index.html')

@app.route('/test', methods=['GET','POST'])
def test():
    if request.method == 'GET':
        return render_template('test.html')
    else:
      return render_template('result.html')

@app.route('/result', methods=['GET'])
def result():
    if request.method == 'GET':
        return render_template('result.html')
    else:
       return render_template('index.html')

@app.route('/ajax', methods=['POST'])
def data():
    data = request.get_json()
    print(data)

    emotion = do_predict(data) # 1
    return render_template(TEMPLATE_DICT[emotion], data)
    # return jsonify(result=data)

def do_predict(data):
    # input text
    input_text = ''
    for k, v in data.items():
        input_text += v
        input_text += '.'

    emotion = dummy_predict(input_text)
    # emotion = model.predict(input_text)

    # post processing

    return result


def dummy_predict(input_text):
    # dummy
    result = ['happy', 'sad', 'angry']
    # random_idx
    return result[0]

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)