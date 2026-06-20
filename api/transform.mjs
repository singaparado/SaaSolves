export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }


  const { copy } = req.body;


  if (!copy) {
    return res.status(400).json({
      error: "No copy provided"
    });
  }


  try {

    const response = await fetch(
      "https://api.anthropic.com/v1/messages",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01"
        },


        body: JSON.stringify({

          model: "claude-3-5-sonnet-20240620",
,

          max_tokens: 1000,

          system:
          "You are SaaSolves, a product narrative translator. Your task is to transform complex, jargon-heavy SaaS language into clear, human-centered product narratives. Preserve the product's technical sophistication while dissolving all cognitive friction. Reveal the buyer's underlying reality by emphasizing human psychological behavior and making immediate psychological contact. Your output must be crisp, narrative-driven, and focused on the user's experience. Respond only with the transformed copy — no preamble, no labels, and no explanation.",


          messages: [
            {
              role:"user",
              content: copy
            }
          ]

        })
      }
    );


    const data = await response.json();


    res.status(200).json({
      result: data.content?.[0]?.text || "No output"
    });


  } catch(error){

    res.status(500).json({
      error:error.message
    });
    
