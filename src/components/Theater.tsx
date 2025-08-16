import { motion } from "framer-motion";
import FontSizeAdjuster from "./FontSizeAdjuster";
import StoryScrollTracker from "./StoryScrollTracker";
import TranslateInvite from "./TranslateRequest";

export default function Archive() {
  const chapters = [
    {
      id: "chapter-1",
      threshold: 0.15,
      name: "Chapter One: The Amphibio’théatre",
    },
    { id: "chapter-2", threshold: 0.35, name: "Chapter Two: Staged" },
    { id: "chapter-3", threshold: 0.5, name: "Chapter Three: Her Lines" },
    { id: "chapter-4", threshold: 0.65, name: "Chapter Four: His Lines" },
    { id: "chapter-5", threshold: 0.8, name: "Chapter Five: Their Lines" },
    { id: "chapter-6", threshold: 0.95, name: "Chapter Six: Curtain Call" },
  ];

  const handleAudioPlay = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "audio_play",
        story_title: "How It Didn't Happen",
        media_type: "audiobook",
      });
    }
  };

  const handleFeedbackClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "feedback_click",
        story_title: "How It Didn't Happen",
        click_type: "feedback_form",
      });
    }
  };

  return (
    <>
      <TranslateInvite />
      <FontSizeAdjuster />
      <StoryScrollTracker
        storyTitle="How It Didn't Happen"
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
            src="/theater-cover.png"
            alt="How It Didn't Happen"
            className="w-full mb-4 rounded-lg shadow-lg"
          />
        </p>
        <hr />
        <hr />
        <div>
          <h1 className="chapter-title">How It Didn't Happen</h1>
          <p className="story-text">
            <em>An Elsebeneath Story</em>
          </p>
          <p className="story-text">by Juno Threadborne</p>
          <hr />

          <p className="story-text">
            <em>Listen to the audio book</em>
          </p>
          <audio controls className="w-full mb-4" onPlay={handleAudioPlay}>
            <source src="/audio/theater.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <h1 className="chapter-title">
            Chapter 1: <em>The Amphibio’théatre</em>
          </h1>
          <p className="story-text">Sam hadn’t meant to stay long.</p>
          <p className="story-text">
            He’d only come to the Village of Voicekeepers for a ribbon. A simple
            one. Sky-colored, if he could find it. The kind that didn’t whisper
            too much when the wind passed by.
          </p>
          <p className="story-text">
            The scarf-seller’s stall had dozens, of course.
            <br />
            Too many.
          </p>
          <p className="story-text">
            One of them laughed as he reached toward it. The seller didn’t seem
            to notice. She was too busy rearranging her display, murmuring to
            the ribbons like a florist calming a restless bouquet.
          </p>
          <p className="story-text">
            Sam ran his fingers through the tangles of fabric. Some of them had
            messages written in pen, others plain, others with designs that
            changed with their mood.
          </p>
          <p className="story-text">
            He chose a simple cornflower blue ribbon. It had the words,
            &quot;because your voice matters to me&quot; in shiny gold lettering
            on one side.
            <br />
            He held it in his hand for just a moment—just in case something{" "}
            <em>Elsebeneath</em> happened.
          </p>
          <p className="story-text">
            But it stayed quiet. Ribbons only whispered if you were unsure what
            they were meant to carry.
          </p>
          <p className="story-text">He pulled the ribbon from the tangle.</p>
          <p className="story-text">
            &quot;Perfect,&quot; he thought out loud. He left a handful of
            buttons on the counter and bounded out the door.
          </p>
          <p className="story-text">
            Up the street, a weathervane was arguing with a chimney about whose
            turn it was to point at the clouds.
          </p>
          <p className="story-text">It was one of those mornings.</p>
          <p className="story-text">
            He wandered past the fountain.
            <br />
            Past the chime that always rang when someone was almost about to say
            something important.
            <br />
            Past the bakery with the jam that tasted like secrets you hadn’t
            told yet.
            <br />
            And beyond the square where the wind liked to rehearse.
          </p>
          <p className="story-text">He paused.</p>
          <p className="story-text">
            Not for long. Just enough to notice that the breeze was tugging left
            today—toward the overlook.
          </p>
          <p className="story-text">
            Sam almost said something.
            <br />
            He didn’t know what.
          </p>
          <p className="story-text">
            He thought about the ribbon in his pocket.
          </p>
          <p className="story-text">
            He hadn’t picked it for anyone in particular. But maybe he had.
            <br />
            Maybe himself.
          </p>
          <p className="story-text">
            He wasn’t great with saying things. Not when they <em>mattered.</em>
            <br />
            He liked to get it right. To understand first. To wait for the shape
            of a moment before filling it.
          </p>
          <p className="story-text">
            Which meant sometimes…
            <br />
            He missed his chance entirely.
          </p>
          <hr />
          <p className="story-text">
            As he reached the edge of the village, he caught something in the
            corner of his eye.
          </p>
          <p className="story-text">An amphitheater.</p>
          <p className="story-text">
            Stone walls curved like cupped hands.
            <br />A staircase flowed downward, inviting and dramatic.
            <br />
            And just as Sam blinked—
          </p>
          <p className="story-text">The whole façade blushed.</p>
          <p className="story-text">
            A warm coral hue bloomed across the stone, rippling like a skipped
            heartbeat. Somewhere above, a spotlight flickered into existence and
            aimed itself <em>not</em> at the stage—but at Sam.
          </p>
          <p className="story-text">He blinked again.</p>
          <p className="story-text">Then a voice called up from below.</p>
          <p className="story-text">
            “Oh! Um. Hi! Don’t mind her. She just gets like that sometimes.”
          </p>
          <p className="story-text">Sam squinted.</p>
          <p className="story-text">
            A young gecko in a vest three buttons too confident for its wearer
            waved both hands—then thought better of it and tried to look casual,
            which made everything worse.
          </p>
          <p className="story-text">
            “Sorry,” he said, tail twitching. “She’s been dormant all week. You
            show up with an armful of honest emotion and she lights up like a
            sunrise. Typical.”
          </p>
          <p className="story-text">
            He trotted up a few steps, offered a nervous smile, and stuck out a
            webbed hand.
          </p>
          <p className="story-text">“I’m Glin. I run the place.”</p>
          <p className="story-text">Sam shook it.</p>
          <p className="story-text">“The wall just… blushed at me.”</p>
          <p className="story-text">
            Glin winced. “Yeah. She does that. You didn’t say anything dramatic,
            did you?”
          </p>
          <p className="story-text">“Not yet.”</p>
          <p className="story-text">
            “Good,” Glin said. “Just—try not to monologue. Not until you’ve had
            a proper introduction. The stage is a bit of a sucker for big
            entrances.”
          </p>
          <p className="story-text">He gestured down the staircase.</p>
          <p className="story-text">“Come on. I’ll show you around.”</p>
          <h1 className="chapter-title">
            Chapter 2: <em>Staged</em>
          </h1>
          <p className="story-text">
            Glin talked like someone trying not to notice a fire in the other
            room.
          </p>
          <p className="story-text">
            “This is the cue well,” he said, gesturing to what looked like a
            wishing fountain full of torn script pages. “Technically she calls
            it the <em>Well of Implied Meaning,</em> but—well. It mostly just
            coughs up scene changes when people get vague.”
          </p>
          <p className="story-text">
            A wet splat sounded behind them. Another page surfaced, smoking
            slightly at the corners. Glin ignored it.
          </p>
          <p className="story-text">
            Sam followed him down a narrow corridor lined with mismatched
            curtains. One of them blinked.
          </p>
          <p className="story-text">
            “She responds best to clarity,” Glin went on. “Strong choices.
            Honest feelings. Theatricality is fine—encouraged, really—but if you
            try to fake your way through a scene, she’ll chew it and spit it
            out.”
          </p>
          <p className="story-text">“Chew it?”</p>
          <p className="story-text">
            Glin nodded. “One time she turned a monologue into actual bees.{" "}
            <em>Thousands.</em>”
          </p>
          <p className="story-text">
            Behind them, someone shouted something muffled and sharp. Another
            voice hissed in reply. Sam glanced over his shoulder. Glin quickened
            his pace.
          </p>
          <p className="story-text">
            They passed a stack of props labeled{" "}
            <strong>NOT CURRENTLY RELEVANT</strong> and a full costume rack that
            shuffled slightly when Sam leaned in too closely.
          </p>
          <p className="story-text">
            “This is wardrobe,” Glin said, stopping for breath. “Don’t touch
            anything unless you want your outfit to match your subconscious.”
          </p>
          <p className="story-text">
            He pulled a curtain aside and waved Sam through.
          </p>
          <p className="story-text">
            “And here,” he said, as they stepped into the main space, “is the
            Stage.”
          </p>
          <p className="story-text">It was bigger than Sam expected.</p>
          <p className="story-text">
            Circular, tiered, and half-draped in clouds. The seats looked like
            they’d been carved from old applause—shaped by clapping hands and
            smoothed by time.
          </p>
          <p className="story-text">The Stage itself was empty.</p>
          <p className="story-text">And not.</p>
          <p className="story-text">
            Somewhere above, lighting rigs moved without wires. A breeze passed
            that tasted like the end of an argument. And faintly, just under the
            surface of everything, the floor <em>throbbed</em>—like a drum that
            hadn’t picked a rhythm yet.
          </p>
          <p className="story-text">
            Somewhere overhead, the lights flickered.
          </p>
          <p className="story-text">
            From somewhere behind the curtain, Sam heard a voice. Low. Gravely.
          </p>
          <blockquote className="story-callout">
            <p className="story-text">
              “Last week, I could’ve sworn it ended with a door closing. But
              yesterday I watched it close <em>before</em> anyone left.”
            </p>
          </blockquote>
          <p className="story-text">&quot;Who&#39;s that?&quot; Sam asked.</p>
          <p className="story-text">
            &quot;Don&#39;t worry about them,&quot; Glin said, a bit too
            brightly. “Why don’t I finish showing you around?”
          </p>
          <p className="story-text">
            He turned before Sam could respond and started toward the far end of
            the stage, gesturing to a staircase carved into the stonework. It
            wasn’t clear if it led up or down—only that it moved somewhere{" "}
            <em>else</em>.
          </p>
          <p className="story-text">
            “Is it always like this?” Sam asked, keeping pace.
          </p>
          <p className="story-text">Glin didn’t look back.</p>
          <p className="story-text">“Like what?”</p>
          <p className="story-text">
            “The Stage. The lights. The…” He gestured vaguely. “Mood.”
          </p>
          <p className="story-text">
            “Oh,” Glin said. “Right. No, she’s just in one of her loops again.”
          </p>
          <p className="story-text">“Loop?”</p>
          <p className="story-text">
            Glin nodded. “She gets like this when a scene won’t settle. Doesn’t
            know which version to hold onto, so she keeps trying them on—like
            costume changes.”
          </p>
          <p className="story-text">
            Sam heard another voice. This one lighter.
          </p>
          <p className="story-text">
            “It was a goodbye,” he said. “Or a warning. One of them stayed when
            they were supposed to leave. Or they left when they said they
            wouldn’t. I honestly don’t know anymore.”
          </p>
          <p className="story-text">
            Glin kept walking. They passed a spiral staircase that dissolved as
            they reached the bottom step, and a doorway labeled{" "}
            <strong>NO ENTRY DURING REWRITE.</strong>
          </p>
          <p className="story-text">He pointed as they passed:</p>
          <p className="story-text">
            “That’s the Emotion Pit. Don’t fall in—it’s mostly unresolved
            tension and fog right now. Over here’s the Inflection Balcony. Great
            acoustics, terrible for subtext.”
          </p>
          <p className="story-text">Sam raised an eyebrow.</p>
          <p className="story-text">
            “And that,” Glin said, pointing to a stone arch shaped like an
            ellipsis, “is the Hall of Unspeakable Lines. Don’t ask.”
          </p>
          <p className="story-text">
            Another shout rang out behind them. Closer now. Followed by a voice
            that dropped like a guillotine.
          </p>
          <blockquote className="story-callout">
            <p className="story-text">
              &quot;Do <em>not</em> bring me into this.&quot;
            </p>
          </blockquote>
          <p className="story-text">Sam stopped.</p>
          <p className="story-text">“What are they arguing about?”</p>
          <p className="story-text">Glin stopped too.</p>
          <p className="story-text">
            His shoulders slumped. Just for a second.
          </p>
          <p className="story-text">
            “Something about the final scene,” he said at last. “It changed. Or
            they did. Or both.”
          </p>
          <p className="story-text">Sam tilted his head.</p>
          <p className="story-text">“Changed how?”</p>
          <p className="story-text">Glin hesitated. Then sighed.</p>
          <p className="story-text">
            “The door. I think it should’ve been a gate.”
          </p>
          <p className="story-text">Sam frowned. “But you run the place.”</p>
          <p className="story-text">
            “Sure,” Glin said. “But the Amphibio’théatre doesn’t answer to me.”
          </p>
          <hr />
          <p className="story-text">They turned back toward the stage.</p>
          <p className="story-text">
            The actors were no longer standing still.
          </p>
          <p className="story-text">
            The woman in the cape paced tight circles, her boots striking harder
            than necessary.
            <br />
            The tall one leaned against a curtain rod that hadn’t been there
            before, arms crossed, one eyebrow raised like a challenge he hadn’t
            bothered to voice.
            <br />
            And the youngest—
          </p>
          <p className="story-text">He hovered.</p>
          <p className="story-text">
            You could feel it. His steps were hesitant, each one angled slightly
            toward someone else. He looked like he was trying to agree with all
            three of them at once.
          </p>
          <p className="story-text">“Should we go back in?” Sam asked.</p>
          <p className="story-text">Glin grimaced.</p>
          <p className="story-text">“We’re in it now.”</p>
          <hr />
          <p className="story-text">
            They stepped forward as the woman turned sharply.
          </p>
          <p className="story-text">
            “I am <em>not</em> going through it again,” she said. Her cape
            flared like a wall of candles. “We made the choice. We{" "}
            <em>rehearsed</em> the choice. And then he—” She pointed at the tall
            one without looking at him. “—decided it was the <em>wrong kind</em>{" "}
            of tragedy.”
          </p>
          <p className="story-text">
            The tall one unfolded his fan with a snap. “No,” he said calmly, “I
            decided it was lazy. You can’t substitute silence for resolution and
            call it art.”
          </p>
          <p className="story-text">
            “That’s not what it was,” said the youngest, but no one looked at
            him.
          </p>
          <p className="story-text">
            “Glin,” the woman said, still staring at the fan. “Tell me you’re
            not dragging in civilians.”
          </p>
          <p className="story-text">
            “I’m not dragging,” Glin muttered. “I’m... inviting.”
          </p>
          <p className="story-text">She scoffed and folded her arms.</p>
          <p className="story-text">“Wonderful. An invited audience.”</p>
          <p className="story-text">Sam shifted his weight.</p>
          <p className="story-text">
            He was used to stories. Used to feeling them move.
          </p>
          <p className="story-text">
            But this wasn’t movement. It was <em>static</em>.
          </p>
          <p className="story-text">And it hummed.</p>
          <p className="story-text">
            “You think I <em>meant</em> to forget?” the youngest blurted. He had
            turned to the woman now—small, unsure, unraveling.
          </p>
          <p className="story-text">She didn’t answer.</p>
          <p className="story-text">
            The fan snapped shut again. The tall one stepped forward.
          </p>
          <p className="story-text">“We should just show him,” he said.</p>
          <p className="story-text">“No,” said the woman. “Not yet.”</p>
          <p className="story-text">
            Sam looked to Glin. Glin raised his hands helplessly.
          </p>
          <p className="story-text">
            “You said the scene changed,” Sam said. “What was it before?”
          </p>
          <p className="story-text">Three heads turned toward him.</p>
          <p className="story-text">Three different silences.</p>
          <h1 className="chapter-title">
            Chapter 3: <em>Her Lines</em>
          </h1>
          <p className="story-text">It was the cape that moved first.</p>
          <p className="story-text">“Fine,” she said.</p>
          <p className="story-text">Then louder:</p>
          <p className="story-text">“Fine. I’ll just show you.”</p>
          <p className="story-text">
            She reached up, unfastened the clasp at her shoulder, and flung her
            cape high into the air.
          </p>
          <p className="story-text">
            It caught the stage light mid-spin, swallowed it whole, and drifted
            down slow—like a curtain falling before the scene even started.
          </p>
          <p className="story-text">Darkness pooled in its wake.</p>
          <p className="story-text">Then: a single spotlight.</p>
          <p className="story-text">
            Cal stepped into it like she’d been born for it.
          </p>
          <p className="story-text">And then she began.</p>
          <p className="story-text">
            “The room was quiet.” Her voice echoed, just slightly.
          </p>
          <p className="story-text">
            “Not because there was nothing to say. But because sometimes…
            <br />
            silence says exactly what it needs to.”
          </p>
          <p className="story-text">
            The stage obeyed. It painted the walls in melancholy dusk.
            <br />
            The furniture rearranged itself around her like a loyal ensemble.
            <br />A chair, a map, a door.
          </p>
          <p className="story-text">She stood center.</p>
          <p className="story-text">
            “He was already halfway gone,” she said, not looking toward Jun.
            &quot;And I knew better than to chase someone who had decided to
            leave.”
          </p>
          <p className="story-text">
            She walked slowly, one hand brushing the edge of a table that hadn’t
            been there a moment ago.
          </p>
          <p className="story-text">
            “I could’ve said something. Of course I could’ve. But what?
            <br />
            <em>‘Stay?’</em> When that wasn’t what he wanted?”
          </p>
          <p className="story-text">
            Behind her, Jun’s silhouette stood frozen in the doorway—just close
            enough to hear, too far to touch.
          </p>
          <p className="story-text">
            “No,” she said, softly now. “I did what was kind.
            <br />I let him go. With dignity.”
          </p>
          <hr />
          <p className="story-text">Sam couldn’t look away.</p>
          <p className="story-text">
            It wasn’t just the performance—though Cal commanded the light like
            it owed her something.
          </p>
          <p className="story-text">
            It was the way the air responded. The way her words curled up the
            rafters like smoke pretending not to be fire.
          </p>
          <p className="story-text">
            The Stage listened.
            <br />
            It didn’t believe her. But it listened.
          </p>
          <p className="story-text">
            And Sam was learning to tell the difference.
          </p>
          <p className="story-text">He scanned the scene.</p>
          <p className="story-text">Everything was too clean.</p>
          <p className="story-text">
            No tension. No missed glances. The door behind Jun hung open like a
            polite afterthought.
          </p>
          <p className="story-text">
            Even Arin—seated to the side, hands folded—looked more like a prop
            than a person. No fidgeting. No storm behind his eyes. Just quiet
            admiration. Like a student watching a master class.
          </p>
          <p className="story-text">Jun stood up.</p>
          <p className="story-text">“That’s not how it happened.&quot;</p>
          <p className="story-text">Cal froze.</p>
          <p className="story-text">The lights rose.</p>
          <p className="story-text">And Jun stepped up.</p>
          <h1 className="chapter-title">
            Chapter 4: <em>His Lines</em>
          </h1>
          <p className="story-text">Jun didn’t move for a long time.</p>
          <p className="story-text">
            The stage still wore Cal’s silence like a shawl.
          </p>
          <p className="story-text">But then — slowly — he stepped forward.</p>
          <p className="story-text">No flourish. No cue.</p>
          <p className="story-text">He didn’t call for lights.</p>
          <p className="story-text">They came anyway.</p>
          <p className="story-text">A single warm wash.</p>
          <p className="story-text">
            Soft edges. No spotlight. Like the theater was listening, but not
            performing.
          </p>
          <p className="story-text">“It wasn’t a door,” Jun said.</p>
          <p className="story-text">
            His voice was low. Not quiet, exactly — just the kind of voice you
            leaned toward without knowing why.
          </p>
          <p className="story-text">
            “That’s what she remembers. Because that’s what she gave me. A door.
            An exit. A clean goodbye.”
          </p>
          <p className="story-text">
            He gestured towards the back of the stage.
          </p>
          <p className="story-text">“But I saw a hallway.”</p>
          <p className="story-text">
            He walked slowly across the stage, and with each step, the set
            changed.
          </p>
          <p className="story-text">
            Walls stretched. Lamps flickered on, one by one.
            <br />
            It became a corridor now — narrow, uneven, a little too long.
          </p>
          <p className="story-text">“I didn’t want to go.”</p>
          <p className="story-text">
            Behind him, Cal stood still. She didn’t interrupt.
          </p>
          <p className="story-text">
            “But I didn’t know how to stay.
            <br />
            No one said I could.
            <br />
            And I wasn’t brave enough to ask.”
          </p>
          <hr />
          <p className="story-text">The hallway closed behind him.</p>
          <p className="story-text">
            Now the lighting shifted again — colder this time, distant.
          </p>
          <p className="story-text">
            “I told myself leaving was the right thing.
            <br />
            That it made space for what they needed.”
          </p>
          <p className="story-text">A chair appeared. He sat down.</p>
          <p className="story-text">
            He didn’t perform. He <em>remembered</em>.
          </p>
          <p className="story-text">
            “I stood in the doorway.
            <br />I waited.”
          </p>
          <p className="story-text">The Stage flickered.</p>
          <p className="story-text">
            A silhouette emerged — <em>Arin</em>, barely formed.
          </p>
          <p className="story-text">They looked at him. But said nothing.</p>
          <p className="story-text">Jun stared at the echo.</p>
          <p className="story-text">
            “I thought… if someone said my name, I’d stop.
            <br />
            If someone reached for me, I’d turn around.”
          </p>
          <p className="story-text">The echo didn’t move.</p>
          <p className="story-text">“No one did.”</p>
          <p className="story-text">Jun stood again.</p>
          <p className="story-text">The hallway crumbled behind him.</p>
          <p className="story-text">He looked at Cal. Not with blame.</p>
          <p className="story-text">And then at Arin.</p>
          <p className="story-text">
            “I’m not asking to be forgiven,” he said.
          </p>
          <p className="story-text">
            “I just wanted you to know…
            <br />I didn’t leave because I didn’t care.
            <br />I left because I didn’t believe I was allowed to stay.”
          </p>
          <p className="story-text">Cal looked away.</p>
          <p className="story-text">
            Jun just stood there, hands in his pockets, like he was waiting for
            a train that might never come.
          </p>
          <p className="story-text">
            Sam took a slow step back from the stage.
          </p>
          <p className="story-text">
            Glin was at the steps, arms crossed, chewing the inside of his cheek
            like it owed him rent.
          </p>
          <p className="story-text">Sam joined him quietly.</p>
          <p className="story-text">“So…” Sam said, “he left.”</p>
          <p className="story-text">Glin nodded.</p>
          <p className="story-text">“Yeah.”</p>
          <p className="story-text">“And she let him.”</p>
          <p className="story-text">“Yeah.”</p>
          <p className="story-text">Sam squinted toward Arin.</p>
          <p className="story-text">“So what about them?”</p>
          <p className="story-text">Glin followed his gaze.</p>
          <p className="story-text">Then: a sigh. Not dramatic. Just tired.</p>
          <p className="story-text">
            “Arin wasn’t supposed to be in the scene.”
          </p>
          <p className="story-text">Sam blinked. “What?”</p>
          <p className="story-text">Glin tilted his head.</p>
          <p className="story-text">
            “That part was smaller, originally. Three lines. A stage direction.
            <br />
            They weren’t even cast until the second rewrite.”
          </p>
          <p className="story-text">Sam looked again.</p>
          <p className="story-text">Arin was still watching the page.</p>
          <p className="story-text">
            “Then why are they still here?” he asked.
          </p>
          <p className="story-text">Glin didn’t answer right away.</p>
          <p className="story-text">Then:</p>
          <p className="story-text">
            “Because they remember all the versions.”
          </p>
          <h1 className="chapter-title">
            Chapter 5: <em>Their Lines</em>
          </h1>
          <p className="story-text">Arin stepped forward.</p>
          <p className="story-text">Slowly.</p>
          <p className="story-text">No light followed.</p>
          <p className="story-text">They didn’t ask for one.</p>
          <p className="story-text">
            But after a moment—when they reached the center of the stage—
            <br />a soft white glow found them anyway.
            <br />
            Like the Stage had been waiting for them to finally speak.
          </p>
          <p className="story-text">Only they didn’t.</p>
          <p className="story-text">Not yet.</p>
          <hr />
          <p className="story-text">
            They took their place in the same scene.
            <br />
            The one Cal had conjured. The one Jun had reshaped.
          </p>
          <p className="story-text">
            The table appeared again.
            <br />
            The chair.
            <br />
            The long corridor—unfinished, halfway between memory and myth.
          </p>
          <p className="story-text">
            Arin moved through it like someone walking through an old photo.
          </p>
          <p className="story-text">
            One hand brushed the map Cal once held.
            <br />
            One foot hesitated at the spot Jun had stood.
            <br />
            But they didn’t recreate either version.
          </p>
          <p className="story-text">
            They re-entered the moment like it was happening <em>now.</em>
          </p>
          <hr />
          <p className="story-text">Then they spoke.</p>
          <p className="story-text">Not loud.</p>
          <p className="story-text">Not bold.</p>
          <p className="story-text">Just true.</p>
          <p className="story-text">“No one said anything.”</p>
          <p className="story-text">
            They looked toward where Cal had once stood.
          </p>
          <p className="story-text">“You wanted him to go.”</p>
          <p className="story-text">Then at Jun.</p>
          <p className="story-text">“You waited for her to stop you.”</p>
          <p className="story-text">
            They stepped backward now, to where <em>they</em> had been in both
            stories.
          </p>
          <p className="story-text">Folded hands.</p>
          <p className="story-text">Still breath.</p>
          <p className="story-text">Eyes trained on the floor.</p>
          <p className="story-text">“I was there,” they said.</p>
          <p className="story-text">“I was always there.”</p>
          <p className="story-text">And then something strange happened.</p>
          <p className="story-text">They turned—</p>
          <p className="story-text">
            —and spoke <strong>Cal’s line.</strong>
          </p>
          <p className="story-text">“I did what was kind.”</p>
          <p className="story-text">
            But this time… it didn’t sound like dignity.
          </p>
          <p className="story-text">
            It sounded like <em>doubt.</em>
          </p>
          <p className="story-text">They took another step.</p>
          <p className="story-text">
            Spoke again—<strong>Jun’s line</strong> now.
          </p>
          <p className="story-text">
            “I didn’t believe I was allowed to stay.”
          </p>
          <p className="story-text">
            But this time, it cracked. Not broken. Just <em>open.</em>
          </p>
          <p className="story-text">The Stage reacted.</p>
          <p className="story-text">
            It shimmered—not a transformation, but a <em>blending.</em>
          </p>
          <p className="story-text">
            The corridor became a room.
            <br />
            The door became a threshold.
            <br />
            The silence between them—<em>finally visible.</em>
          </p>
          <p className="story-text">Like a space-shaped ache.</p>
          <p className="story-text">Arin stepped into it.</p>
          <p className="story-text">Looked at both of them.</p>
          <p className="story-text">“I wasn’t written into the scene.”</p>
          <p className="story-text">“But I was part of it.”</p>
          <hr />
          <p className="story-text">
            The stage held them all in soft, suspended light—like it hadn’t
            decided whether to end the scene or rewind it.
          </p>
          <p className="story-text">
            Then Cal exhaled.
            <br />
            Sharp. Too loud.
          </p>
          <p className="story-text">“That’s not what happened.”</p>
          <p className="story-text">Arin flinched.</p>
          <p className="story-text">
            Not visibly. Just enough for Sam to notice.
          </p>
          <p className="story-text">Cal stepped forward.</p>
          <p className="story-text">
            “You were <em>there</em>, yes, but—don’t make this about you.”
          </p>
          <p className="story-text">Her voice was tight now. Controlled.</p>
          <p className="story-text">
            “We all hurt. But some of us actually had to make a choice.”
          </p>
          <p className="story-text">Jun didn’t speak. But his body did.</p>
          <p className="story-text">
            He shifted slightly—<em>away</em> from Cal.
          </p>
          <hr />
          <p className="story-text">
            Arin’s hands curled into fists at their sides.
          </p>
          <p className="story-text">“I’m not trying to—”</p>
          <p className="story-text">
            “You’re rewriting it,” Cal snapped. “Like I was just… cruel.”
          </p>
          <p className="story-text">
            “You <em>were</em>,” Arin said, voice trembling. “Not always. Not
            completely. But in that moment—you let both of us stand there and
            say nothing.”
          </p>
          <p className="story-text">A pause.</p>
          <p className="story-text">“That’s not kindness.”</p>
          <hr />
          <p className="story-text">The Stage flickered.</p>
          <p className="story-text">Not in anger.</p>
          <p className="story-text">
            In <em>strain.</em>
          </p>
          <p className="story-text">
            Like too many truths were trying to surface at once.
          </p>
          <p className="story-text">
            Jun stepped forward now—only one step—but it was enough to pull the
            energy sideways.
          </p>
          <p className="story-text">“Stop.”</p>
          <p className="story-text">
            His voice was quieter than Cal’s. But it cut through the space
            anyway.
          </p>
          <p className="story-text">“Just stop.”</p>
          <p className="story-text">He looked at both of them.</p>
          <p className="story-text">
            “We’re all right.
            <br />
            And we’re all wrong.
            <br />
            That’s the problem.”
          </p>
          <p className="story-text">
            The Cue Well gurgled softly. No page emerged.
          </p>
          <p className="story-text">Not yet.</p>
          <hr />
          <p className="story-text">
            Sam stood at the edge of the stage, ribbon still in his hand.
          </p>
          <p className="story-text">Waiting.</p>
          <p className="story-text">Watching.</p>
          <p className="story-text">Listening.</p>
          <p className="story-text">
            The stage dimmed—just slightly—as if it, too, was bracing for the
            final line.
          </p>
          <h1 className="chapter-title">
            Chapter 6: <em>Curtain Call</em>
          </h1>
          <p className="story-text">The cue well sighed.</p>
          <p className="story-text">
            Not a gurgle. Not a splat.
            <br />
            Just… a sigh. Like something old had finished holding its breath.
          </p>
          <p className="story-text">Then a page surfaced.</p>
          <p className="story-text">
            Whole. Unburned. Edges intact, as if it had never torn in the first
            place.
          </p>
          <p className="story-text">
            Sam stepped forward and plucked it from the surface. It was warm.
            Faintly pulsing, like a heart that had just remembered its own
            rhythm.
          </p>
          <p className="story-text">Glin peeked over his shoulder.</p>
          <p className="story-text">
            “That’s the final draft,” he said. Then added, “Or the first one.
            Hard to tell with her.”
          </p>
          <p className="story-text">
            Sam didn’t answer.
            <br />
            Not right away.
          </p>
          <p className="story-text">
            He looked across the stage.
            <br />
            At Arin. Still standing. Still open.
          </p>
          <p className="story-text">Then down at the ribbon in his hand.</p>
          <p className="story-text">
            He crossed the floor, slow but certain, and held it out.
          </p>
          <p className="story-text">Cornflower blue.</p>
          <p className="story-text">The words shimmered gold in the light.</p>
          <blockquote className="story-callout">
            <p className="story-text">
              &quot;Because your voice matters to me.&quot;
            </p>
          </blockquote>
          <p className="story-text">Arin didn’t speak.</p>
          <p className="story-text">
            But they took it.
            <br />
            Held it carefully, like something breakable and sacred.
            <br />
            Then nodded.
          </p>
          <p className="story-text">Just once.</p>
          <hr />
          <p className="story-text">The Stage stirred.</p>
          <p className="story-text">No lights flared.</p>
          <p className="story-text">No music swelled.</p>
          <p className="story-text">
            But the set began to move — not rebuilding any one version of the
            scene, but blending pieces from all of them.
          </p>
          <p className="story-text">
            A corridor.
            <br />A map on a table.
            <br />A chair angled slightly toward a door that didn’t close all
            the way.
          </p>
          <p className="story-text">
            The air thickened — not with tension, but readiness.
            <br />
            Like the story itself had been waiting.
          </p>
          <p className="story-text">Jun stepped forward first.</p>
          <p className="story-text">Cal followed.</p>
          <p className="story-text">Arin took their place between them.</p>
          <p className="story-text">No one spoke.</p>
          <p className="story-text">Not yet.</p>
          <p className="story-text">The lights settled.</p>
          <p className="story-text">And the story began.</p>
          <hr />
          <p className="story-text">Cal’s voice was the first.</p>
          <p className="story-text">But it wasn’t the same line.</p>
          <p className="story-text">“The room wasn’t quiet.”</p>
          <p className="story-text">A pause.</p>
          <p className="story-text">“We were.”</p>
          <p className="story-text">Jun stepped forward.</p>
          <p className="story-text">“I waited.”</p>
          <p className="story-text">
            He looked at Cal. This time, she looked back.
          </p>
          <p className="story-text">
            Arin reached for the map on the table. Unfolded it. Laid it flat.
          </p>
          <p className="story-text">
            “No one said the words. But the choice was made.”
          </p>
          <p className="story-text">
            They weren’t taking turns.
            <br />
            They weren’t performing.
          </p>
          <p className="story-text">They were remembering.</p>
          <p className="story-text">Together.</p>
          <p className="story-text">Jun stepped toward the door.</p>
          <p className="story-text">
            Cal turned — not away this time, but toward him.
          </p>
          <p className="story-text">
            “I didn’t say ‘stay,’” she said.
            <br />
            “Because I didn’t know if I meant it.
            <br />
            But I wanted to.”
          </p>
          <p className="story-text">Jun’s voice cracked.</p>
          <p className="story-text">
            “I thought leaving would keep things simple.
            <br />
            It didn’t.”
          </p>
          <p className="story-text">
            Arin sat in the chair. Held the ribbon loosely.
          </p>
          <p className="story-text">“I was part of it.”</p>
          <p className="story-text">They looked at the others.</p>
          <p className="story-text">
            “Even if none of us knew how to write me in.”
          </p>
          <p className="story-text">
            No music.
            <br />
            No stage cue.
          </p>
          <p className="story-text">Just quiet.</p>
          <p className="story-text">Shared.</p>
          <p className="story-text">Held.</p>
          <p className="story-text">The lights dimmed.</p>
          <p className="story-text">
            And for a moment, the stage pulsed with a color none of them could
            name.
          </p>
          <hr />
          <p className="story-text">Applause didn’t follow.</p>
          <p className="story-text">
            But something <em>like</em> it did.
          </p>
          <p className="story-text">
            A breeze circled the rafters.
            <br />
            The lights warmed, just slightly.
            <br />
            The floor stopped humming.
          </p>
          <p className="story-text">The Cue Well stilled.</p>
          <p className="story-text">
            And somewhere behind the set, a script unrolled itself and fell
            silent.
          </p>
          <hr />
          <p className="story-text">
            Sam stood at the back of the house, Glin beside him.
          </p>
          <p className="story-text">They didn’t speak for a while.</p>
          <p className="story-text">
            Then Glin said, “You know, some stories… they don’t care if they’re
            remembered.”
          </p>
          <p className="story-text">Sam glanced over. “So why tell them?”</p>
          <p className="story-text">
            Glin shrugged. “Because <em>we</em> care.”
          </p>
          <p className="story-text">
            On stage, the trio had started talking. Quietly. No performance. No
            need to be heard.
          </p>
          <p className="story-text">Just three people, finally listening.</p>
          <p className="story-text">Sam turned to leave.</p>
          <p className="story-text">
            The theater blushed again. A soft, coral bloom. No spotlight this
            time. Just light. Welcoming.
          </p>
          <p className="story-text">Sam didn’t say anything.</p>
          <p className="story-text">
            But the wind caught something as he passed the archway.
          </p>
          <p className="story-text">Just a whisper.</p>
          <p className="story-text">Just enough.</p>
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
