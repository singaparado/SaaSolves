export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { copy } = req.body;

  if (!copy) {
    return res.status(400).json({ error: "No copy provided" });
  }

  // YOUR CUSTOM ONTOLOGY / LOGIC
  const transform = (input) => {
    let output = input;
    
    // Example: Replace jargon with your preferred human-centered terms
    const dictionary = {
      "multi-tenant spatial API architecture": "our shared map-data engine",
      "synchronized multi-layered geolocation cross-referencing parameters": "that instantly coordinates your team's location data"
    };

    Object.keys(dictionary).forEach(jargon => {
      const regex = new RegExp(jargon, 'gi');
      output = output.replace(regex, dictionary[jargon]);
    });

    return output;
  };

  try {
    // No fetch() needed anymore!
    const result = transform(copy);

    res.status(200).json({ result: result });
  } catch (error) {
    res.status(500).json({ error: "Transformation error." });
  }
}
