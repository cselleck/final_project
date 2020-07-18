# final_project

##Visit our final website at https://master.dxyc7zu9259ce.amplifyapp.com/



<div class="text-container">

### TABLEAU ANALYSIS

% Alcohol would appear to have a significant impact on the quality of the wine with the 2nd highest R Squared value of our attributes/ features with the higher the alcohol the better the quality.  Most of the wines in our data were between 9 and 12% but alcohol content between 12 and 12.5% appears to be the ideal range based on the data while the wines with an alcohol % around 9.5% faired the worst.

![alternative](static/images/tab-alcohol.jpg)

The level of chlorides is moderately important in determing wine quality with higher levels having a negative affect.  Wines from from Australia and Argentina tend to have higher levels of chlorides than those produced in the US and France.

![alternative](static/images/tab-chlorides.jpg)


The key difference between volatile and fixed acids is that the volatile acids easily vaporize whereas the fixed acids do not.   The level of fixed acidity appears to have minimal impact in determining wine quality but very low levels tend to have a negative impact on wine quality with wines testing highest having the best.

![alternative](static/images/tab-facidity.jpg)

Volatile acidity, unlike fixed acidity does appear to have a significant impact on wine quality as it has the highest R Squared value of 11 attributes / features.  Our results show that the lower the level of volatile acid, the better the wine quality.

![alternative](static/images/tab-vacidity.jpg)

Citric acid is often added to wines to increase acidity, complement a specific flavor.  It can be added to finished wines to increase acidity and give a “fresh” flavor.  The data shows that citric acid levels have moderate impact on wine quality with moderatly high levels having a positve impact while extremely low levels (< .05 g/l) producing low quality wines.

![alternative](static/images/tab-citric.jpg)

Sulfur dioxide, SO2, is a colorless gas or liquid with a strong, choking odor.  Sulphur dioxide is present in wines as "free SO2 and also bound to acetaldehyde. The sum gives total SO2. It is added to wine as an antioxidant in order to produce fresher tasting and wine with better appearance.  It also allows longer storage of the wine  Free SO2 tends to have very limited impact when it comes to determing wine quality but wines with the lowest Free SO2 have the highest quality rating while the highest level has the quality.

![alternative](static/images/tab-fsd.jpg)

Total SO2 like free SO2 has limited impact on our ability to predict wine quality but wines with total SO2 levels of between .15 and .30 g/L tend to produce the wines with higher quality.

![alternative](static/images/tab-tsd.jpg)

The PH level of a wine is generally considered to be critical to wine quaility but our data suggests that it has limited impact on our ability to determine overall wine quality.  Our data suggests that a PH level of between 3.2 and 3.3 have better overall quality

![alternative](static/images/tab-ph.jpg)

Residual Sugar (or RS) is from natural grape sugars that are leftover in the wine after the fermentation process finishes.   Wines with a RS level below .01 are considered very dry, .03 - .05 as semi-sweet, .05 as sweet.  The wines in our data had RS of less than .03 and would be in the dry category.  From our data, Residual Sugars have limited impact our ability to determine wine quality

![alternative](static/images/tab-rs.jpg)

Hydrogen sulfide, H₂S, is an undesirable compound produced during wine fermentation. Formation of hydrogen sulfide typically occurs during the primary fermentation when yeast activity is high with copper sulphate commonly added to remove or lower the H₂S levels.  Sulphate SO42 and sulfite SO43 are both Oxy-anions of Sulfur, a non-metallic element.  With the a very low R Squared factor, Sulphate has limited impact on our ability to deterimine wine quality but levels of .65 and .90 tend to produce wines with higher wine quality than those with Sulphate levels of .55.

![alternative](static/images/tab-sulphates.jpg)

Density has a moderate impact to wine quality with lighter wines being favored over heavy wines.

![alternative](static/images/tab-density.jpg)


To get additional insight into the data and each attributes impact on quality, I bucketed each attribute into 5 categories from low to low.  Once bucketed, the average wine quality for each attribute/category was compared to the mean for that attribute with the absolute value of sum of the attributes-category variances to the mean being the final rank for the attributes.

![alternative](static/images/most_important_factors.jpg)

Alcohol and volatile acid also had the 2 highest R Sq factor of the 11 attributes while sulphates, was 3rd in quality predictability but had the 2nd lowest R Sq.  These items were identified because you can see a clear separation between the groups and variance to the mean.  All three have distint trends with higher levels of alcohol and sulphates producing better quality wine while the lower the volatile acid level, the better the wine

![alternative](static/images/high_correlation.jpg)

The 3 attributes with the lowest predictability factor also ranked toward the bottom when it came to their R Sq faction.  Each groups small variance from the overall mean is the reason why these attributes provide litte use when it comes to quality prediction

![alternative](static/images/low_correlation.jpg)

For best results, the data shows that wines with higher alcohol, sulphates and fixed acidity levels make better wine than lower while lower volatile acidity, density, chlorides and free sulphur dioxide levels produce better quality wine than higher.  

![alternative](static/images/perfect_wine_recipe.jpg)

with Tableau pictures and an analysis

</div>

<div class="text-container">
### FUTURE ENHANCEMENTS

What we would like

If we had more than 10 days

</div>

<div class="text-container">

### LIMITS AND LIABILITIES IN OUR MODEL

discuss

</div>
