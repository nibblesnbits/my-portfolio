import React, { useState } from "react";

export default function PersonalizationForm() {
  const [name, setName] = useState("");
  const [pronoun, setPronoun] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Please enter a name");
      return;
    }

    if (!pronoun) {
      alert("Please select a pronoun");
      return;
    }

    // Construct the URL with parameters
    const url = `https://thrd.me/in/to/island?n=${encodeURIComponent(
      name.trim()
    )}&p=${encodeURIComponent(pronoun)}`;

    // Track the personalization event if dataLayer exists
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "story_personalization",
        story_title: "The Island of Almosts",
        personalization_name: name.trim(),
        personalization_pronoun: pronoun,
      });
    }

    // Navigate to the personalized story
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="bg-secondary/20 p-6 rounded-lg border border-secondary/30 my-6">
      <h3 className="text-lg font-medium mb-4 text-center">
        📖 Experience a Personalized Version
      </h3>
      <p className="text-sm text-muted-foreground mb-4 text-center">
        Enter your name and pronouns to read a version of the story written just
        for you.
      </p>

      <div className="space-y-4 max-w-md mx-auto">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            maxLength={50}
          />
        </div>

        <div>
          <label htmlFor="pronoun" className="block text-sm font-medium mb-2">
            Pronouns
          </label>
          <select
            id="pronoun"
            value={pronoun}
            onChange={(e) => setPronoun(e.target.value)}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          >
            <option value="">Select pronouns</option>
            <option value="he">he/him</option>
            <option value="she">she/her</option>
            <option value="they">they/them</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          ✨ Create My Personal Story
        </button>
      </div>

      <p className="text-xs text-muted-foreground mt-3 text-center">
        This will open your personalized story in a new tab
      </p>
    </div>
  );
}
