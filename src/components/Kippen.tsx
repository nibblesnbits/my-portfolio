import { motion } from "framer-motion";
import FontSizeAdjuster from "./FontSizeAdjuster";
import StoryScrollTracker from "./StoryScrollTracker";
import { TextSelectionSharing } from "./TextSelectionsSharing";
import TranslateInvite from "./TranslateRequest";

export default function Kippen() {
  const chapters = [{ id: "book", threshold: 0.9, name: "Book" }];

  const handlePDFDownload = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "pdf_download",
        story_title: "A Kitten Named Kippen",
        download_type: "full_story",
      });
    }
  };

  const handleAudioPlay = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "audio_play",
        story_title: "A Kitten Named Kippen",
        media_type: "audiobook",
      });
    }
  };

  const handleFeedbackClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "feedback_click",
        story_title: "A Kitten Named Kippen",
        click_type: "feedback_form",
      });
    }
  };

  return (
    <>
      <FontSizeAdjuster />
      <TranslateInvite />
      <StoryScrollTracker
        storyTitle="A Kitten Named Kippen"
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
            src="/kippen-cover.png"
            alt=""
            className="w-full mb-4 rounded-lg shadow-lg"
          />
        </p>
        <div className="text-center mb-6">
          <a
            href="https://junothreadborne.me/docs/A%20Kitten%20Named%20Kippen.pdf"
            className="underline text-2xl"
            onClick={handlePDFDownload}
          >
            Download the PDF here.
          </a>
        </div>
        <hr />
        <TextSelectionSharing
          storyTitle="A Kitten Named Kippen"
          author="Juno Threadborne"
          minSelectionLength={15}
          platforms={["twitter", "linkedin", "facebook", "copy"]}
          className="prose prose-lg max-w-none"
        >
          <h1 className="chapter-title">A Kitten Named Kippen</h1>
          <p className="story-text">
            <em>An Elsebeneath Interlude</em>
          </p>
          <p className="story-text">by Juno Threadborne</p>
          <hr />
          <br />
          <audio controls className="w-full mb-4" onPlay={handleAudioPlay}>
            <source src="/audio/kippen.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <hr />
          <br />
          <p className="story-text">
            Kippen woke the way he always did—like someone who had never once
            worried the world might not adore him. There was no one in the house
            to tell him otherwise. There hadn’t been for quite some time, though
            the scarf on the doorknob still seemed to remember someone else’s
            name.
          </p>
          <p className="story-text">
            He tugged on his favorite sweater vest (buttoned one too high, as
            usual) and his green plaid cap tilted slightly left, as always. His
            dirt-dappled fur was a mix that couldn’t decide if it was orange or
            gray.
          </p>
          <p className="story-text">
            “Perfect,” he thought, scrunching his already-scrunched nose at his
            reflection in the kettle. “Today is going to be <em>very</em>{" "}
            Kippen.”
          </p>
          <p className="story-text">
            The kettle, long since retired from whistling, fogged slightly in
            response. It used to belong to someone with strong tea opinions. Now
            it mostly gave compliments.
          </p>
          <p className="story-text">
            Outside, the Village of Voicekeepers hummed awake. Doors mumbled to
            themselves, ribbons rustled as if remembering things they meant to
            say yesterday, and chimes caught stray thoughts the way cobwebs
            catch dust motes. Somewhere, a weathervane spun without wind—just
            practicing.
          </p>
          <hr />
          <br />
          <p className="story-text">
            The cobbler’s shop door creaked softly as Kippen bounded up.
          </p>
          <p className="story-text">
            “Morning, Kippen!” the cobbler beamed. “That vest really...&quot; he
            considered Kippen for a moment, eyes lingering on his face.
            &quot;...emphasizes your brave little nose!”
          </p>
          <p className="story-text">
            Kippen beamed. <em>Of course it does.</em>
            <br />
            He had no memory of being brave, exactly. But everyone seemed to
            agree on the matter, and that felt just as good.
          </p>
          <p className="story-text">
            The chime above the door sang a soft greeting as a man entered. He
            wore a grey coat, barefoot, with index cards spilling from every
            pocket—like someone who knew <em>exactly</em> what shelf all the
            world’s answers lived on, even if most of them were mislabeled.
          </p>
          <p className="story-text">
            He noticed Kippen and kneeled next to him.
          </p>
          <p className="story-text">
            &quot;Well hello, Kippen,&quot; he said with a nod.
          </p>
          <p className="story-text">&quot;Morning, Gable.&quot;</p>
          <p className="story-text">
            Gable reached in his pocket and pulled out an especially small
            card—creased, but proud.
          </p>
          <p className="story-text">
            &quot;I think this one is waiting for just the right compliment,” he
            said, voice low and confident.
          </p>
          <p className="story-text">
            He tucked the card in Kippen’s vest pocket and stood. He gave the
            cobbler a wave as he picked up his shoes and turned to leave. They
            looked newly polished, but still carried the laces from someone
            else’s story.
          </p>
          <p className="story-text">
            Behind him, a windchime above the door blurted, “Don’t forget your
            own laces!”
          </p>
          <p className="story-text">
            Gable spun on his heel, laughing. “Right! Thanks!” and casually
            unspooled two laces from a display.
          </p>
          <hr />
          <br />
          <p className="story-text">
            A scarf seller was hanging ribbons on a line that sagged like it
            remembered being tied too tightly.
          </p>
          <p className="story-text">
            “Ah, Kippen! Your whiskers look so… <em>determined</em> today!”
          </p>
          <p className="story-text">
            <em>Determined whiskers,</em> Kippen thought with pride.{" "}
            <em>Practically general material.</em>
          </p>
          <p className="story-text">
            From behind the cart another cat padded up. She was dark as night
            and had a small telescope charm tied around her neck with a silver
            chain—tarnished at the edges, as if it had once tried very hard to
            belong to someone who forgot to keep it.
          </p>
          <p className="story-text">
            She reached out with one paw and tugged at one of Kippen&#39;s
            crooked whiskers. It sprung right back, more kinked than before.
          </p>
          <p className="story-text">
            &quot;Good morning, Vel,&quot; Kippen said with a grin. She nodded
            and smiled.
          </p>
          <p className="story-text">
            Vel flicked her tail thoughtfully as she looked up at the sagging
            ribbons.
            <br />
            “Those ribbons have seen better days, haven’t they? Like they’re
            tired of holding on.”
          </p>
          <p className="story-text">
            Kippen nodded solemnly, “Maybe they just need a little fresh breeze
            to remind them what it’s like to fly.”
          </p>
          <p className="story-text">
            Vel’s eyes twinkled behind her telescope charm. “You always know
            just what to say, Kippen.”
          </p>
          <p className="story-text">
            Kippen gave a modest bow of his head. “Only when the whiskers are
            feeling determined.”
          </p>
          <p className="story-text">
            A soft gust curled between them, lifting a ribbon that hadn’t moved
            in weeks.
            <br />
            Vel tilted her head. “That one remembers something,” she said
            quietly.
            <br />
            Kippen didn’t ask what. He just smiled and moved on.
          </p>
          <p className="story-text">
            With a wink, he adjusted his crooked whiskers, tipped his cap to
            Vel, and continued down the street—his steps light as the chimes
            above began a soft, wandering tune.
          </p>
          <hr />
          <br />
          <p className="story-text">
            A villager carrying a bundle of letters stepped into his path.
            <br />
            “Morning, Kippen! You’re looking <em>particularly</em> dapper
            today!” she said, beaming.
          </p>
          <p className="story-text">
            Kippen flashed a grin that showed every crooked tooth. He beamed the
            way he always did, like joy was a reflex and praise a daily vitamin.
          </p>
          <p className="story-text">
            But something in the villager’s eyes flickered—like a paper lantern
            catching wind.
            <br />
            Her smile didn’t vanish, but it dimmed.
            <br />
            She looked down at her letters. “Well… mostly.”
          </p>
          <p className="story-text">Kippen flinched.</p>
          <p className="story-text">
            Not all of him.
            <br />
            Just a part behind his whiskers, somewhere between his ears and his
            chest.
          </p>
          <p className="story-text">
            It prickled.
            <br />
            Just for a moment.
            <br />
            Like maybe… maybe she hadn’t meant it.
            <br />
            Or maybe she <em>had</em>, and that was worse.
          </p>
          <p className="story-text">
            He shook it off with a practiced tail-flick.
            <br />
            <em>She’ll get over it. Who could stay mad at me?</em>
          </p>
          <p className="story-text">
            He hummed as he walked, until he didn’t.
            <br />
            Until a voicekeeper chime caught his eye—
            <br />a particularly pretty one, all bent spoons and bottle glass,
            turning in the breeze like it was trying to make up its mind.
          </p>
          <p className="story-text">
            Kippen tilted his head, smiling at its quiet music.
          </p>
          <p className="story-text">
            Behind him, footsteps passed.
            <br />
            Someone glanced his way.
            <br />
            They didn’t speak.
          </p>
          <p className="story-text">The wind stirred.</p>
          <p className="story-text">
            It threaded through the chime like a question that had waited too
            long.
          </p>
          <p className="story-text">The chime rang once—gentle.</p>
          <p className="story-text">And then:</p>
          <blockquote className="story-callout">
            <p className="story-text">
              <em>“He doesn’t know he’s here because he’s forgotten.”</em>
            </p>
          </blockquote>
          <p className="story-text">Kippen blinked.</p>
          <p className="story-text">
            The villager walked on, still smiling warmly, never knowing what the
            chime had said.
          </p>
          <p className="story-text">
            But Kippen stayed.
            <br />
            Paws planted.
            <br />
            Tail still.
          </p>
          <p className="story-text">
            The village hummed.
            <br />
            Ribbons rustled.
            <br />
            Doors muttered.
            <br />
            Chimes giggled softly, trying not to make it worse.
          </p>
          <p className="story-text">
            And for the first time that morning, Kippen didn’t move with it.
          </p>
          <hr />
          <br />
          <p className="story-text">He walked slower now.</p>
          <p className="story-text">
            The village didn’t look different—
            <br />
            Every door still half-spoke its half-thoughts.
            <br />
            Every ribbon still fluttered like it wanted to say just one more
            thing.
          </p>
          <p className="story-text">But something had shifted.</p>
          <p className="story-text">
            Something in Kippen’s ears.
            <br />
            In the way the air sat on his fur.
          </p>
          <p className="story-text">
            The next villager smiled as he passed.
            <br />
            “Morning, Kippen! That hat tilt is perfect today!”
          </p>
          <p className="story-text">
            Perfect.
            <br />
            Was it?
            <br />
            Or did she mean <em>“ridiculous”</em> and just hadn’t learned how to
            say it gently?
          </p>
          <p className="story-text">
            By the time he reached the far end of the square, he’d stopped
            humming.
          </p>
          <p className="story-text">
            His tail—usually a perky little metronome—hung limp, swaying only
            when the wind insisted.
          </p>
          <p className="story-text">
            He paused by the fountain. Watched the ripples.
            <br />
            The reflection that looked back at him was… off.
          </p>
          <p className="story-text">
            His snout looked shorter than he remembered.
            <br />
            His whiskers kinked more to the left.
            <br />
            His vest didn’t sit quite right on his shoulders.
          </p>
          <p className="story-text">He’d always thought that meant charm.</p>
          <p className="story-text">But now—</p>
          <p className="story-text">
            <em>Is this what they see?</em>
          </p>
          <p className="story-text">
            And for the first time in his life, the thought didn’t just bounce
            off.
            <br />
            It <em>stuck.</em>
          </p>
          <p className="story-text">
            “Something’s wrong,” a voice said behind him.
          </p>
          <p className="story-text">Kippen turned.</p>
          <p className="story-text">
            Brynn stood there, a basket on her hip, her hair tied up like it was
            thinking about coming loose. She looked at him the way bakers look
            at dough that’s just barely off—like it’s still got something rising
            in it.
          </p>
          <p className="story-text">
            “You’re walking like someone just told you your vest has been
            buttoned wrong your whole life.”
          </p>
          <p className="story-text">Kippen blinked. “Has it?”</p>
          <p className="story-text">
            Brynn tilted her head. Studied him the way only she could—like she
            was picking a truth from a shelf she hadn’t dusted in years.
          </p>
          <p className="story-text">
            “You’re funny-looking,” she said, plain as flour.
          </p>
          <p className="story-text">Kippen’s ears drooped.</p>
          <p className="story-text">
            “But,” she added, stepping closer, “you make people happy. You
            always have. You bring light just by being you. That’s not because
            you’re pretty, Kippen. It’s because you’re <em>Kippen.</em>”
          </p>
          <p className="story-text">
            He opened his mouth. Closed it again. His tail twitched like it
            didn’t know what side it was on.
          </p>
          <p className="story-text">“So that’s a… good thing?”</p>
          <p className="story-text">
            Brynn smiled.
            <br />
            “It’s the best kind of thing.”
          </p>
          <p className="story-text">
            Above them, the wind curled through a ribbon strung between a bakery
            hook and a bird-shaped chime. It rustled. Shifted. Then settled.
          </p>
          <blockquote className="story-callout">
            <p className="story-text">
              <em>“Tell him he’s loved.”</em>
            </p>
          </blockquote>
          <p className="story-text">
            Brynn didn’t even glance up.
            <br />
            She just reached out and ruffled his scrunched-up little face like
            she’d done a hundred times before.
          </p>
          <p className="story-text">
            Something in his chest—some knot made of compliments and
            forgettings—eased.
          </p>
          <p className="story-text">Not completely.</p>
          <p className="story-text">But enough.</p>
          <p className="story-text">
            And for the first time since the chime…
            <br />
            Kippen smiled and <em>meant it.</em>
          </p>
          <hr />
          <br />
          <p className="story-text">
            He walked back through the square with Brynn’s words still warm in
            his chest, like jam on toast.
            <br />
            Like toast that was almost burned, but saved at the last second.
          </p>
          <p className="story-text">
            The village hadn’t changed.
            <br />
            But it no longer felt like it might slip away the second he stopped
            performing.
          </p>
          <p className="story-text">
            The baker waved from her doorway.
            <br />
            “Morning again, Kippen! You forgot your jam earlier!”
          </p>
          <p className="story-text">
            Kippen smiled—<em>really</em> smiled—and trotted over.
            <br />
            “Thanks,” he said, tucking the jar into his vest pocket.
            <br />
            “I don’t know what I’d do without you.”
          </p>
          <p className="story-text">
            The baker grinned. “Probably eat dry bread.”
          </p>
          <p className="story-text">
            Up ahead, the scarf seller was re-tying her display. One ribbon
            whispered something about a missing blue thread.
          </p>
          <p className="story-text">
            Kippen stopped.
            <br />
            “That green one looks amazing today,” he said, pointing with a paw.
          </p>
          <p className="story-text">She blinked. “Oh! You think so?”</p>
          <p className="story-text">“Definitely. Suits you.”</p>
          <p className="story-text">
            The scarf seller beamed. Just a little. But it stuck.
          </p>
          <hr />
          <br />
          <p className="story-text">And then—her.</p>
          <p className="story-text">
            The villager with the letters.
            <br />
            The one whose smile had trembled earlier like it wasn’t sure it had
            permission.
          </p>
          <p className="story-text">
            She moved carefully across the cobblestones, arms full.
          </p>
          <p className="story-text">
            Kippen took a breath.
            <br />
            The kind you take before doing something brave in a small way.
          </p>
          <p className="story-text">
            “Those are a lot of letters,” he said gently.
            <br />
            “Bet you’ve got the best handwriting in town.”
          </p>
          <p className="story-text">
            She blinked.
            <br />
            Then smiled.
          </p>
          <p className="story-text">Not the kind that flickers.</p>
          <p className="story-text">
            The kind that <em>knows.</em>
          </p>
          <p className="story-text">
            “Well. I <em>do</em> take my time with it.”
          </p>
          <p className="story-text">
            Something fluttered in Kippen’s chest.
            <br />
            Not pride.
            <br />
            Not performance.
          </p>
          <p className="story-text">
            Something gentler.
            <br />
            Quieter.
            <br />
            Like a ribbon tying itself for the first time.
          </p>
          <hr />
          <br />
          <p className="story-text">
            As he passed the fountain again, a breeze threaded through the
            voicekeeper chime—the same one as before.
          </p>
          <p className="story-text">It rang once, softly.</p>
          <p className="story-text">Then again.</p>
          <p className="story-text">
            Kippen sat. Looked up.
            <br />
            Then down, where the index card peeked from his vest pocket.
          </p>
          <p className="story-text">
            He pulled it out.
            <br />
            Read the words Gable had left him—words the wind had been waiting to
            say:
          </p>
          <blockquote className="story-callout">
            <p className="story-text">
              <em>“You’re loved. That’s what matters.”</em>
            </p>
          </blockquote>
          <p className="story-text">Kippen tilted his head. Smiled.</p>
          <p className="story-text">
            The villager with the letters walked on, unaware.
          </p>
          <p className="story-text">But this time, that felt okay.</p>
          <p className="story-text">
            Kippen turned toward home, tail flicking.
          </p>
          <p className="story-text">
            Today was still <em>very</em> Kippen.
            <br />
            Just… a little less lonely than before.
          </p>
        </TextSelectionSharing>
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

        {/* Footer content stays the same */}
        <div className="row py-2 lg:py-0 items-center flex-wrap-reverse">
          <div className="text-center lg:col-6 lg:mb-0 lg:text-left">
            <ul>
              <li className="m-2 inline-block">
                &copy; Juno Threadborne 2025{" "}
                <a href="https://thrd.me/mirror">✨</a>
              </li>
            </ul>
          </div>
          {/* Remove the old static Ko-fi button since we now have the floating one */}
        </div>
      </motion.div>
    </>
  );
}
