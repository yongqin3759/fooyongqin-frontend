import React from 'react'

const NLPModal = () => {
  return (
    <div class="mx-auto p-2 shadow-lg">
      
        <p class="mb-6">This is our group project predicting mental health status using two databases related to mental illness.</p>
        
        <h2 class="text-2xl font-semibold mb-4">First Dataset</h2>
        <p class="mb-6">Our first dataset was retrieved by a study which scraped then labeled tweets that contained keywords related to the PH-9 depression scale. <em>Due to sensitivity I will not be providing real examples.</em> One of the key difficulties in this dataset were that the same words/phrases in different sentences could mean different things. Consider these two sentences:</p>

        <div class="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 mb-6">
        <p class="mb-6">non-depressed: <strong>This movie is so bad and hopeless it makes me want to jump off a building</strong> </p>
        <p >depressed: <strong>I hate my hopeless life I want to jump off a building.</strong> </p>
        </div>

        <p class="mb-6">However, after many failed attempts at different models (e.g., TF-IDF then Logistic Regression, LSTM, Bi-LSTM), our team decided to continue with another dataset.</p>


        <div class="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 mb-6">
            <p>Using TF-IDF vectorization followed by linear regression to classify depression severity was challenging. Especially since data retrieval of the depression severity dataset involved obtaining tweets that contained symptoms of depression or their synonyms.</p>
        </div>

        <p class="mb-6"><strong>I continued working on both datasets as I needed to figure out the solution to this problem. </strong></p>

        <p class="mb-6">Luckily I found a better model to train the data. BERT (Bidirectional Encoder Representations from Transformers). </p>

        <p >Ultimately, I managed to get better predictions on the first depression severity related database using BERT with a 75% accuracy. I have attached my groups report on the card so you can download and view it.</p>
    </div>
  )
}

export default NLPModal