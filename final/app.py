

import pandas as pd
import numpy as np
from flask import Flask, request, render_template, jsonify
import pickle
from sklearn.externals import joblib


app = Flask(__name__)

# //  The order our predictive model needs the data to be in 
#         // 'fixed acidity','volatile acidity', 'citric acid', 'residual sugar',
#         // 'chlorides', 'free sulfur dioxide', 'total sulfur dioxide', 'density',
#         // 'ph', 'sulphates', 'alcohol'

@app.route('/getdelay',methods=['POST','GET'])
def get_delay():
    if request.method=='POST':
        result=request.form.to_dict(flat=True)
        final_list=[[float(result['fixed_acidity']),float(result['volatile_acidity']),float(result['citric_acid']),float(result['residual_sugar']), float(result['chlorides']), float(result['free_sulphur_dioxide']), float(result['total_sulphur_dioxide']), float(result['density']), float(result['pH']), float(result['sulphates']), float(result['alcohol'])]]
        final_list=np.array(final_list)
        fa=float(result['fixed_acidity'])
        va=float(result['volatile_acidity'])
        lg_from_joblib=joblib.load('static/data/finalized_model_joblib.obj')
        prediction = lg_from_joblib.predict(final_list)
        
        # print(prediction)
    
        return render_template('template.html',prediction=prediction)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/template")
def template():
    return render_template("template.html")

@app.route("/privacy-policy")
def privacy_policy():
    return render_template("privacy-policy.html")


# @app.route('/predict')
# def predict():
# #use the loaded model to make prediction
#     result = loaded_model.predict(X_test)
#     result_accuracy = loaded_model.score(X_test, y_test)

#     return (result, accuracy)




if __name__ == '__main__':
     app.run(debug=True)