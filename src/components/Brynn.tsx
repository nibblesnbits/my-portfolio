import { motion } from "framer-motion";
import FontSizeAdjuster from "./FontSizeAdjuster";
import StoryScrollTracker from "./StoryScrollTracker";
import TranslateInvite from "./TranslateRequest";

export default function Archive() {
  const chapters = [{ id: "story", threshold: 0.05, name: "Story" }];

  const handleAudioPlay = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "audio_play",
        story_title: "The Loaf The Wouldn't Listen",
        media_type: "audiobook",
      });
    }
  };

  const handleFeedbackClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "feedback_click",
        story_title: "The Loaf The Wouldn't Listen",
        click_type: "feedback_form",
      });
    }
  };

  return (
    <>
      <TranslateInvite />
      <FontSizeAdjuster />
      <StoryScrollTracker
        storyTitle="The Loaf The Wouldn't Listen"
        chapters={chapters}
        showProgressBar={true}
      />

      <motion.div
        className="max-w-2xl mb-8 mt-8 book-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          <img
            src="/brynn-cover.png"
            alt="The Loaf The Wouldn't Listen"
            className="w-full mb-4 rounded-lg shadow-lg"
          />
        </p>
        <hr />
        <hr />
        <div>
          <h1 className="chapter-title">The Loaf The Wouldn't Listen</h1>
          <p className="story-text">
            <em>A Brynn Story</em>
          </p>
          <p className="story-text">by Juno Threadborne</p>
          <hr />

          <p className="story-text">
            <em>Listen to the audio book</em>
          </p>
          <audio controls className="w-full mb-4" onPlay={handleAudioPlay}>
            <source src="/audio/brynn.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p className="story-text">
            Brynn had been at it since dawn.
            <br />
            Three tries. Three failures.
          </p>
          <p className="story-text">
            The recipe — a page from her grandmother’s cookbook, soft at the
            edges and written in a looping, stubborn script — refused to behave.
          </p>
          <p className="story-text">
            The loaf always came out <em>wrong</em>.<br />
            Not burnt. Not raw. Just… not the way she remembered it.
            <br />
            Too uneven in the rise, crust too mottled, crumb too loose.
          </p>
          <p className="story-text">
            She blamed the humidity.
            <br />
            Then the flour.
            <br />
            Then the wind, which had been nosy all week.
          </p>
          <p className="story-text">
            By the fourth try, she was muttering at the dough as she shaped it.
            <br />
            “You’re supposed to be a celebration loaf. Not… whatever this is.”
          </p>
          <p className="story-text">
            The dough said nothing, but Brynn swore she felt it shrug.
          </p>
          <hr />
          <p className="story-text">
            When the bell over the bakery door gave its usual morning “
            <em>tunk</em>,” Brynn barely looked up.
            <br />
            She was watching the oven like it might admit its guilt if she
            stared long enough.
          </p>
          <p className="story-text">
            Sam wandered in, scarf loose around his neck, a paper crane tucked
            in one pocket.
            <br />
            “Smells good,” he said.
          </p>
          <p className="story-text">
            “It smells <em>fine</em>,” Brynn corrected, “but it’s wrong.”
          </p>
          <p className="story-text">He tilted his head. “Wrong how?”</p>
          <p className="story-text">
            She pulled the loaf from the oven with unnecessary precision.
            <br />
            The top was a little lopsided, one side darker than the other.
            <br />
            Brynn frowned at it like it had personally betrayed her.
          </p>
          <p className="story-text">
            Sam leaned on the counter. “You’re going to throw it out, aren’t
            you?”
          </p>
          <p className="story-text">
            “Yes,” she said. “And then I’ll make it again until it stops looking
            like it’s judging me.”
          </p>
          <hr />
          <p className="story-text">
            Before she could reach for the bread knife, the door chimed again.
          </p>
          <p className="story-text">
            A man stepped in — one of the quieter regulars, always ordering the
            same safe things. Today, though, he was staring at the loaf on the
            counter like it had walked up and introduced itself.
          </p>
          <p className="story-text">“Is that… for sale?” he asked.</p>
          <p className="story-text">Brynn blinked. “It’s not my best work.”</p>
          <p className="story-text">
            “Good,” he said, with a small, almost embarrassed smile.
            <br />
            “Perfect bread feels like it doesn’t need you. It tastes better when
            it’s still trying.”
          </p>
          <p className="story-text">
            Brynn didn’t answer. She just sliced the loaf, wrapped it, and
            handed it over.
          </p>
          <hr />
          <p className="story-text">
            That afternoon, she found a folded napkin on the counter.
            <br />
            Her name on the outside.
            <br />
            Inside, a few crumbs clung to the paper, and beneath them, in uneven
            pencil:
          </p>
          <blockquote className="story-callout">
            <p className="story-text">
              <em>This was the happiest bread I’ve ever had.</em>
            </p>
          </blockquote>
          <p className="story-text">
            Brynn read it twice. Then she tucked it into her ribbon rack, right
            between:
          </p>
          <blockquote className="story-callout">
            <p className="story-text">
              <strong>“I was right, and I hated it”</strong>
              <br />
              and
              <br />
              <strong>“No one knew how hard I was trying.”</strong>
            </p>
          </blockquote>
          <p className="story-text">
            That night, when she baked again, she didn’t watch the oven quite as
            closely.
            <br />
            The loaf came out lopsided.
          </p>
          <p className="story-text">But it looked… content.</p>
        </div>
        <br />
        <p className="mt-6 mb-2 text-center text-muted-foreground">
          I'd love to hear what moments mattered most to you.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScQARjat_oEJ9cNEb1fzWJaNyRRP6n44WkeydZRub3VvCmXoA/viewform?usp=sharing&ouid=112014812140367339055"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition mb-4"
          onClick={handleFeedbackClick}
        >
          💭 Share What Stayed With You
        </a>
        <br />
        <br />
        <a
          href="https://elsebeneath.online"
          className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          🔙 Return Home
        </a>

        <div className="row py-2 lg:py-0 items-center flex-wrap-reverse">
          <div className="text-center lg:col-6 lg:mb-0 lg:text-left">
            <ul>
              <li className="m-2 inline-block">
                &copy; Juno Threadborne 2025{" "}
                <a href="https://thrd.me/mirror">✨</a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}
