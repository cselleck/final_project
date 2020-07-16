

import pandas as pd
import numpy as np
from flask import Flask, request, render_template
import pickle

app = Flask(__name__)

# //  The order our predictive model needs the data to be in 
#         // 'fixed acidity','volatile acidity', 'citric acid', 'residual sugar',
#         // 'chlorides', 'free sulfur dioxide', 'total sulfur dioxide', 'density',
#         // 'ph', 'sulphates', 'alcohol'
# load the model from disk
#loaded_model = joblib.load('/static/data/finalized_model_joblib.obj')
@app.route('/getdelay',methods=['POST','GET'])
def get_delay():
    if request.method=='POST':
        result=request.form
        fixed_acidity = result['fAcidity']
        volatile_acidity = result['vAcidity']
        citric_acid = result['citric']
        residual_sugar=result['rs']
        chlorides=result['chloride']
        free_sulphur_dioxide=result['fsd']
        total_sulphur_dioxide=result['tsd']
        density=result['density']
        ph=result['ph']
        sulphates=result['sulphates']
        alcohol=result['alcohol']



        pkl_file = open('static/data/cat', 'rb')
        index_dict = pickle.load(pkl_file)
        cat_vector = np.zeros(len(index_dict))
        
        try:
            cat_vector[index_dict['fixed_acidity'+fixed_acidity]] = 1
        except:
            pass
        try:
            cat_vector[index_dict['volatile_acidity'+volatile_acidity]] = 1
        except:
            pass
        try:
            cat_vector[index_dict['citric_acid'+citric_acid]] = 1
        except:
            pass
        try:
            cat_vector[index_dict['residual_sugar'+citric_acid]] = 1
        except:
            pass
        try:
            cat_vector[index_dict['chlorides'+chlorides]] = 1
        except:
            pass
        try:
            cat_vector[index_dict['free_sulphur_dioxide'+free_sulphur_dioxide]] = 1
        except:
            pass
        try:
            cat_vector[index_dict['total_sulphur_dioxide'+total_sulphur_dioxide]] = 1
        except:
            pass
        try:
            cat_vector[index_dict['density'+density]] = 1
        except:
            pass
        try:
            cat_vector[index_dict['pH'+ph]] = 1
        except:
            pass
        try:
            cat_vector[index_dict['sulphates'+sulphates]] = 1
        except:
            pass
        try:
            cat_vector[index_dict['alcohol'+alcohol]] = 1
        except:
            pass
        
        pkl_file = open('static/data/finalized_model_joblib.obj', 'rb')
        logmodel = pickle.load(pkl_file)
        prediction = logmodel.predict(cat_vector)
        result_accuracy = logmodel.score(cat_vector)
        
        
        return render_template('template.html',prediction=prediction)
        return render_template('template.html',result_accuracy=result_accuracy)


@app.route("/")
def index():
    return render_template("/index.html")

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