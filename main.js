async function googlepalm(message){
    const API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    const MODEL_NAME = "models/text-bison-001";
    
    const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
    const { GoogleAuth } = require("google-auth-library");

    const client = new TextServiceClient({
        authClient: new GoogleAuth().fromAPIKey(API_KEY),
    });
  
    let result = await client.generateText({
        model: MODEL_NAME,
        prompt: {text: message},
    })

    // let output = JSON.stringify(result, null, 2);

    try {
        let response = await result[0].candidates[0].output;
        return response;
    } catch (error) {
        console.log(error);
        return "There was an error";
    }
}

async function ask(prompt){
    console.log(await googlepalm(prompt));
}

ask('how are you');