import { motion } from "framer-motion";
import FontSizeAdjuster from "./FontSizeAdjuster";
import StoryScrollTracker from "./StoryScrollTracker";
import ChapterTitle from "./ChapterTitle";
import TranslateInvite from "./TranslateRequest";
import PersonalizationForm from "./PersonalizationForm";

export default function Island() {
  // Define chapters for The Island of Almosts
  const chapters = [
    { id: "chapter-1", threshold: 0.15, name: "Chapter One: The Tangle" },
    {
      id: "chapter-2",
      threshold: 0.35,
      name: "Chapter Two: The Bird Who Never Sang",
    },
    {
      id: "chapter-3",
      threshold: 0.5,
      name: "Chapter Three: The Snail Who Raced a Cheetah",
    },
    {
      id: "chapter-3-5",
      threshold: 0.6,
      name: "Chapter Three and a Half: The Shortcut",
    },
    {
      id: "chapter-4",
      threshold: 0.7,
      name: "Chapter Four: The Painter Who Erased the World",
    },
    {
      id: "chapter-5",
      threshold: 0.8,
      name: "Chapter Five: Fall Number 4,030",
    },
    { id: "chapter-6", threshold: 0.9, name: "Chapter Six: The First Trick" },
  ];

  const handlePDFDownload = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "pdf_download",
        story_title: "The Island of Almosts",
        download_type: "full_story",
      });
    }
  };

  const handleAudioPlay = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "audio_play",
        story_title: "The Island of Almosts",
        media_type: "audiobook",
      });
    }
  };

  const handleFeedbackClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "feedback_click",
        story_title: "The Island of Almosts",
        click_type: "feedback_form",
      });
    }
  };

  return (
    <>
      <TranslateInvite />
      <FontSizeAdjuster />
      <StoryScrollTracker
        storyTitle="The Island of Almosts"
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
            src="/island-cover.webp"
            alt="Village of Voicekeepers"
            className="w-full mb-4 rounded-lg shadow-lg"
          />
        </p>
        <div className="text-center mb-6">
          <a
            href="https://junothreadborne.me/docs/The%20Island%20of%20Almosts.pdf"
            className="underline text-2xl"
            onClick={handlePDFDownload}
          >
            Download the PDF here.
          </a>
        </div>
        <hr />
        <div>
          <PersonalizationForm />
        </div>
        <hr />
        <div>
          <h1 className="chapter-title">The Island of Almosts</h1>
          <p className="story-text">by Juno Threadborne</p>
          <p className="story-text">
            <em>Book 1 of the Elsebeneath series</em>
          </p>

          <p className="story-text">
            <em>
              Listen to the Audiobook (with music provided by{" "}
              <a
                className="underline"
                href="https://pixabay.com/users/9096471/"
              >
                Geoff Harvey
              </a>
              ).
            </em>
          </p>
          <audio controls className="w-full mb-4" onPlay={handleAudioPlay}>
            <source src="/audio/almosts.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <ChapterTitle id="chapter-1" name="Chapter One: The Tangle" />

          <p className="story-text">
            Sam stood in the driveway, holding his yo-yo like it was mocking
            him.
          </p>
          <p className="story-text">
            It wasn’t a bad yo-yo. It was blue and shiny and balanced{" "}
            <em>just right</em>—just like the videos said it should be. Sam had
            measured, cut, and tied the string <em>exactly</em> the way he was
            supposed to. He’d practiced. A <em>lot</em>.
          </p>
          <p className="story-text">
            But still... the stupid thing wouldn’t listen.
          </p>
          <p className="story-text">
            He tried the trick again. “Around the World,” just like Jamie had
            done at school. Sam swung the yo-yo hard, but it twisted in midair,
            slammed into the ground, and bounced back up in a weird wobble that
            smacked him in the leg.
          </p>
          <p className="story-text">
            “Ow!”
            <br />
            He winced, grabbing the string.
          </p>
          <p className="story-text">
            Across the street, Jamie was finishing a combo trick Sam didn’t even
            know the name of. Something with a loop, a flip, and a spin at the
            end. When he landed it, all the kids cheered like he’d just caught a
            Pokémon with one hand.
          </p>
          <p className="story-text">
            Sam didn’t look. He didn’t clap. He just sat down on the curb, his
            yo-yo in his lap, arms crossed in defeat.
          </p>
          <p className="story-text">
            “I’ll never be good at this,” he mumbled.
          </p>
          <p className="story-text">
            The wind blew a little. Quiet. Like it wasn’t sure what to say.
          </p>
          <p className="story-text">
            Sam stared down at the tangled string in his hands. He tugged it.
            Twisted it. Tried to unknot it. But somehow, no matter what he did,
            it looked worse than when he started.
          </p>
          <p className="story-text">And then—</p>
          <p className="story-text">
            The world got <em>quiet</em>. Not just regular quiet—
            <em>magical</em> quiet. The kind of quiet where something is{" "}
            <em>about to happen</em>.
          </p>
          <p className="story-text">Sam blinked.</p>
          <p className="story-text">
            The curb under him had vanished. The road nowhere in sight. Even
            Jamie’s cheers had faded. And the yo-yo in his hand?
          </p>
          <p className="story-text">Still there.</p>
          <p className="story-text">
            But now he was sitting on soft, springy grass. The sky above him was
            lavender, and the clouds looked like upside-down question marks. In
            the distance, he heard... was that a juggler? Or a goat trying to
            play violin?
          </p>
          <p className="story-text">A voice behind him said:</p>
          <p className="story-text">
            “Ah. A visitor. Just in time. Let me guess—you were <em>almost</em>{" "}
            ready to give up?”
          </p>
          <p className="story-text">Sam turned.</p>
          <p className="story-text">
            And standing there was a turtle wearing glasses, a hat made of moss,
            and the warmest smile Sam had ever seen.
          </p>
          <hr />
          <p className="story-text">
            The turtle stepped closer, grass rustling softly under his feet. He
            wasn’t in a hurry. In fact, he moved like the world would wait if he
            needed it to.
          </p>
          <p className="story-text">
            His shell was wide, with tiny mushrooms growing near the bottom
            edge. His glasses had one cracked lens. And his eyes… his eyes
            looked like he’d watched a million suns rise and memorized every
            single one.
          </p>
          <p className="story-text">He held out a stubby hand.</p>
          <p className="story-text">
            “Welcome to the Island of Almosts. I’m Practicio. Resident listener,
            patient walker, and—should you accept—your guide.”
          </p>
          <p className="story-text">
            Sam blinked, still holding the yo-yo.
            <br />
            “Where… am I?”
          </p>
          <p className="story-text">
            Practicio smiled. “Where people go when they think maybe—
            <em>maybe</em> they’re just not good enough.”
          </p>
          <p className="story-text">
            Sam looked down at his yo-yo, then back up. “Is this a dream?”
          </p>
          <p className="story-text">
            “Maybe.” The turtle shrugged. “But it’s also <em>real</em>. Most of
            the good places are.”
          </p>
          <p className="story-text">
            Practicio turned slowly, gesturing with his hand, as the sky above
            them shimmered. Far in the distance, a trumpet tooted a note that
            didn’t belong in <em>any</em> key. While a squirrel balanced on one
            paw reading upside down. A kite flew in loops above the trees—
            <em>with no string at all</em>.
          </p>
          <p className="story-text">
            “This island is full of people and creatures who were{" "}
            <em>almost</em> good at something. Some gave up. Some are still
            trying. And some…”—he looked at Sam—“just need to see things from
            another angle.”
          </p>
          <p className="story-text">
            Sam’s eyes narrowed. “Are you saying <em>I’m</em> not good at yo-yo
            tricks?”
          </p>
          <p className="story-text">
            Practicio chuckled, completely unbothered.
            <br />
            “I’m saying you’re not <em>done yet</em>.”
          </p>
          <p className="story-text">
            He turned again, slowly starting to walk down a gently curving path
            made of scattered notebook pages and half-finished to-do lists. With
            each step, the grass beneath him glowed faintly.
          </p>
          <p className="story-text">
            “Come with me. I want to show you something. Three some-things,
            actually. Stories. And all of them? Almosts.”
          </p>
          <p className="story-text">Sam hesitated.</p>
          <p className="story-text">
            Then—he stood up. Yo-yo still tangled, heart still sore, but maybe…{" "}
            <em>just maybe</em>… a little curious.
          </p>
          <p className="story-text">And he followed.</p>
          <ChapterTitle
            id="chapter-2"
            name="Chapter Two: The Bird Who Never Sang"
          />

          <p className="story-text">
            Practicio led Sam along the winding path. The sky above shifted from
            lavender to soft peach, like it was blushing from some secret joke.
          </p>
          <p className="story-text">
            Soon they reached a clearing filled with music—but not full songs.
            Just… <em>beginnings</em>.<br />A few notes here. A riff there. A
            melody that almost made sense before drifting off into nothing.
          </p>
          <p className="story-text">
            Sitting in the middle of it all was a tiny bird with feathers like
            scattered piano keys—white, black, and shimmering blue. She wore a
            scarf made of sheet music. And around her were dozens—
            <em>hundreds</em>—of little scraps of paper with lyrics, verses, and
            lines.
          </p>
          <p className="story-text">
            She noticed them and quickly stuffed one of the pages under a wing.
          </p>
          <p className="story-text">
            “Oh! Visitors? Um. Sorry. I’m still… working on something.”
          </p>
          <p className="story-text">
            Practicio gave a small bow. “Sam, this is Thimble. The best
            almost-singer I’ve ever met.”
          </p>
          <p className="story-text">
            Thimble looked embarrassed. “That’s not really a title, is it?”
          </p>
          <p className="story-text">
            “It is here,” the turtle said gently. “Why don’t you show Sam one of
            your songs?”
          </p>
          <p className="story-text">
            The bird shuffled. “They’re not <em>done</em>.”
          </p>
          <p className="story-text">“They don’t have to be.”</p>
          <p className="story-text">
            After a pause, Thimble pulled out a slip of paper and hummed a few
            bars. It was light and strange and hauntingly lovely.
          </p>
          <p className="story-text">
            Sam listened, eyebrows raised. “That’s <em>really</em> good.”
          </p>
          <p className="story-text">
            Thimble smiled shyly. “It always <em>starts</em> good. But then I
            mess it up. I think of a better idea halfway through. Or I hear
            someone else’s song and mine feels… smaller. So I stop. And I start
            over. Again. And again. And again.”
          </p>
          <p className="story-text">
            Practicio gave her a kind look. “How many songs have you almost
            written?”
          </p>
          <p className="story-text">
            Thimble looked down. “…a hundred and forty-seven.”
          </p>
          <p className="story-text">
            Sam’s eyes widened. “Why not just finish one?”
          </p>
          <p className="story-text">
            The little bird sighed. “Because what if it’s not perfect?”
          </p>
          <p className="story-text">Sam didn’t answer.</p>
          <p className="story-text">
            He looked at his yo-yo.
            <br />
            Then at his hands.
            <br />
            Then at Thimble.
          </p>
          <p className="story-text">She noticed. “You’re stuck too, huh?”</p>
          <p className="story-text">He nodded.</p>
          <p className="story-text">
            Thimble hesitated, then pulled a scrap of paper from the ground—one
            with a single, delicate line of lyrics—and tucked it into Sam’s
            pocket.
          </p>
          <p className="story-text">
            “Here. It’s not finished. But it’s still <em>mine.</em> And maybe…
            that’s enough for now.”
          </p>
          <p className="story-text">
            Practicio gave a soft smile as they turned to go.
          </p>
          <p className="story-text">
            “Not everything needs to be a masterpiece to mean something.”
          </p>
          <p className="story-text">
            The wind carried a few quiet notes behind them as they walked
            away—half a melody, unfinished… but still beautiful.
          </p>
          <ChapterTitle
            id="chapter-3"
            name="Chapter Three: The Snail Who Raced a Cheetah"
          />
          <p className="story-text">
            The next part of the island felt <em>slower</em>. The air was thick
            with the scent of rain and earth, and the grass here grew in soft
            spirals that curled inward like sleepy question marks.
          </p>
          <p className="story-text">
            Practicio led Sam to a shallow hill with a tiny track carved into
            the mud—like someone had been running laps very, very slowly.
          </p>
          <p className="story-text">Sam squinted. “Is that… a snail?”</p>
          <p className="story-text">
            A voice groaned from under a little leaf umbrella.
          </p>
          <p className="story-text">“Was. Used to be. Sort of.”</p>
          <p className="story-text">
            The snail was wearing a headband—damp, droopy, and too big—and had
            tiny racing stripes painted (badly) down his shell. Around him were
            posters that read things like “<strong>YOU’VE GOT THIS!</strong>”
            and “<strong>SHELL ON, HEAD HIGH!</strong>”
          </p>
          <p className="story-text">Sam knelt down. “What happened?”</p>
          <p className="story-text">
            The snail sighed. “Name’s <strong>Zoomie</strong>. I was going to be
            the fastest snail in the <em>entire world</em>. I trained for{" "}
            <em>weeks</em>. Left slime trails everywhere. Even built this
            track.”
          </p>
          <p className="story-text">
            Practicio nodded. “He was doing well. Making progress. Consistent.
            Dedicated.”
          </p>
          <p className="story-text">
            Zoomie gave a proud little shrug. “Then one day, I looked up—and saw
            a cheetah.”
          </p>
          <p className="story-text">
            Sam tilted his head. “An <em>actual</em> cheetah?”
          </p>
          <p className="story-text">
            Zoomie nodded. “It was amazing. Legs like wind. Moved like a
            thought. Ran from one side of the island to the other in the time it
            takes me to <em>blink</em>.”
          </p>
          <p className="story-text">He lowered his voice.</p>
          <p className="story-text">
            “So I stopped. What was the point? I’d never be <em>that</em> fast.”
          </p>
          <p className="story-text">Sam was quiet.</p>
          <p className="story-text">Practicio looked at him gently.</p>
          <p className="story-text">
            “Comparison can make you forget how far <em>you’ve</em> come. Zoomie
            was never supposed to race cheetahs. He was supposed to race{" "}
            <em>yesterday’s Zoomie.</em>”
          </p>
          <p className="story-text">Sam looked down at his yo-yo.</p>
          <p className="story-text">
            “I keep thinking I’m supposed to be as good as Jamie.”
          </p>
          <p className="story-text">
            Zoomie snorted. “Well <em>don’t</em>. Jamie’s Jamie. You’re you. If
            I’d just kept training, I might’ve been the fastest snail{" "}
            <em>in history</em>. Now I just… sit here and collect motivational
            posters.”
          </p>
          <p className="story-text">
            Sam reached down and peeled one off the mud. It read:{" "}
            <strong>YOU’RE STILL MOVING, AND THAT COUNTS.</strong>
          </p>
          <p className="story-text">He smiled.</p>
          <p className="story-text">And Practicio smiled, too.</p>
          <p className="story-text">
            “On this island,” the turtle said, “the race is never against
            someone else. It’s against the part of you that wants to stop.”
          </p>
          <ChapterTitle
            id="chapter-3-5"
            name="Chapter Three and a Half: The Shortcut"
          />

          <p className="story-text">
            After saying goodbye to Zoomie, the trail forked.
          </p>
          <p className="story-text">
            One path kept winding gently forward, deeper into the island. But
            the other was narrower. Crooked. Twisted. At the end of it, Sam
            could see a shimmer—like the place he came from.
          </p>
          <p className="story-text">He pointed.</p>
          <p className="story-text">“Is that… the way home?”</p>
          <p className="story-text">Practicio looked at it for a long time.</p>
          <p className="story-text">
            “Sort of. It leads back. But it skips the rest.”
          </p>
          <p className="story-text">
            Sam’s fingers tightened around his yo-yo.
          </p>
          <p className="story-text">
            “I don’t know if I want to see more Almosts. It’s kind of… sad.
            Like, what if I end up like them? What if <em>this</em> is just my
            Almost?”
          </p>
          <p className="story-text">
            Practicio didn’t answer right away. He just watched Sam. Not
            pushing.
          </p>
          <p className="story-text">
            Sam looked down the shortcut again. It was tempting—quiet and safe.
            No more unfinished songs. No more muddy tracks.
          </p>
          <p className="story-text">
            But something tugged at him. A memory. A page in his pocket.
          </p>
          <p className="story-text">
            “Thimble gave me a song,” he whispered. “And Zoomie gave me a
            poster.”
          </p>
          <p className="story-text">He looked at the yo-yo in his hand.</p>
          <p className="story-text">
            “I think they <em>kept</em> going. Somewhere. Even if it didn’t work
            out.”
          </p>
          <p className="story-text">Practicio nodded slowly.</p>
          <p className="story-text">
            “The shortcut skips the struggle. But it skips the story, too.”
          </p>
          <p className="story-text">
            Sam looked down the crooked path one last time.
          </p>
          <p className="story-text">Then turned away from it.</p>
          <p className="story-text">“Let’s keep going.”</p>

          <p className="story-text">Practicio smiled, and they walked on.</p>
          <ChapterTitle
            id="chapter-4"
            name="Chapter Four: The Painter Who Erased the World"
          />

          <p className="story-text">
            The path curved gently into a forest of giant mushrooms and
            sea-glass trees. Light filtered through the leaves in ripples, like
            they were underwater. Everything shimmered softly, as if the island
            was holding its breath.
          </p>
          <p className="story-text">
            Ahead was a clearing filled with <em>canvases</em>. Dozens of them.
            Hundreds. All propped up or tossed aside—some half-painted, others
            smudged over in grey.
          </p>
          <p className="story-text">
            And in the center, hunched over one of them, sat an octopus wearing
            a beret. Each of her arms held a different brush—and each brush was
            dipped in a different color.
          </p>
          <p className="story-text">
            She didn’t notice Sam and Practicio right away. She was busy
            painting, erasing, painting again—faster and faster until the canvas
            turned into a muddled blur of brushstrokes.
          </p>
          <p className="story-text">Practicio cleared his throat softly.</p>
          <p className="story-text">
            The octopus startled and whipped around.
            <br />
            “Oh! Visitors! Just a moment, I’m—well, actually, I’m{" "}
            <em>restarting</em>. Again.”
          </p>
          <p className="story-text">
            “Sam,” said Practicio, “this is <em>Inky</em>. She’s one of the most
            talented painters I’ve ever met.”
          </p>
          <p className="story-text">
            Inky waved a brush. “I <em>was</em>. Maybe. Before I started{" "}
            <em>thinking</em> about being good.”
          </p>
          <p className="story-text">Sam stepped closer. “What do you mean?”</p>
          <p className="story-text">
            Inky gestured to the wreckage of canvases around her. “I used to
            love painting. I’d make jellyfish galaxies and upside-down sunsets.
            But one day, I looked at my work and thought, ‘Wait… what if someone
            else sees this and thinks it’s <em>bad</em>?’”
          </p>
          <p className="story-text">
            She frowned. “So I erased a little. Then a little more. Then I
            started fixing lines that didn’t need fixing. And then I erased the
            fixes.”
          </p>
          <p className="story-text">She picked up a brush with a sigh.</p>
          <p className="story-text">
            “Now I paint and repaint until the colors forget what they were
            trying to be.”
          </p>
          <p className="story-text">
            Practicio gently touched one of the canvases. It was beautiful—soft
            blues and oranges, like a dream about the ocean—but the center was
            completely smudged away.
          </p>
          <p className="story-text">
            “Sometimes,” the turtle said, “we lose the joy of making because
            we’re too busy judging the making.”
          </p>
          <p className="story-text">Sam swallowed. That one hit close.</p>
          <p className="story-text">
            “But what if it <em>is</em> bad?” he asked.
          </p>
          <p className="story-text">
            Inky gave him a crooked smile. “Then it’s{" "}
            <em>one step closer to being better</em>. You don’t learn anything
            by hiding a blank canvas.”
          </p>
          <p className="story-text">
            She dipped a new brush in orange and handed it to Sam.
          </p>
          <p className="story-text">“Here. Try. Just a line.”</p>
          <p className="story-text">
            Sam hesitated. Then drew one wobbly stroke.
          </p>
          <p className="story-text">It wasn’t perfect.</p>
          <p className="story-text">
            But it felt <em>real</em>.
          </p>
          <p className="story-text">And that was something.</p>
          <ChapterTitle id="chapter-5" name="Chapter Five: Fall Number 4,030" />

          <p className="story-text">
            The path rose again, gently winding up a hill scattered with pebbles
            and wildflowers. The sky above had shifted into soft golden-pink,
            like a sunset that didn’t want to end.
          </p>
          <p className="story-text">Practicio walked a little slower now.</p>
          <p className="story-text">
            Sam walked beside him, yo-yo still tangled, but his hands holding it
            differently—like it wasn’t broken, just paused.
          </p>
          <p className="story-text">At the top of the hill, they heard it.</p>
          <p className="story-text">
            <em>WHOOOSH—CLUNK—POOF.</em>
          </p>
          <p className="story-text">And then:</p>
          <p className="story-text">“WELL, THAT COULD’VE BEEN WORSE!”</p>
          <p className="story-text">
            Sam stepped over the ridge and burst out laughing.
          </p>
          <p className="story-text">
            At the bottom of the hill, tangled in her own tail and lying in a
            puff of glittery dust, was a kangaroo. She wore a too-big helmet and
            elbow pads that had definitely seen better days. Her skateboard had
            rolled into a bush.
          </p>
          <p className="story-text">She sat up, shook her head, and grinned.</p>
          <p className="story-text">
            “Fall number 4,030! Who’s counting? <em>I am!</em> Wanna see 4,031?”
          </p>
          <p className="story-text">
            Practicio chuckled. “Sam, meet <strong>Kip</strong>. She’s been
            practicing the same trick for three years.”
          </p>
          <p className="story-text">
            Sam’s eyes widened. “You’re still not done?”
          </p>
          <p className="story-text">
            Kip pulled a leaf out of her helmet. “Nope! But I’m way better than
            I was at fall number 83. And <em>way</em> less bruised than 2,012.”
          </p>
          <p className="story-text">
            Sam stepped forward. “Don’t you get tired of failing?”
          </p>
          <p className="story-text">
            Kip tilted her head. “I don’t fail. I <em>fall</em>. It’s not the
            same.”
          </p>
          <p className="story-text">
            She stood up and dusted herself off. “Every time I fall, I learn
            something. Sometimes it’s big—like where to put my feet. Sometimes
            it’s small—like ‘don’t practice after eating six apples.’ But every
            time, I get closer.”
          </p>
          <p className="story-text">“And someday, I’ll land it.”</p>
          <p className="story-text">She looked at Sam’s yo-yo.</p>
          <p className="story-text">“You fallin’, too?”</p>
          <p className="story-text">Sam nodded.</p>
          <p className="story-text">“Then you’re already on the way.”</p>
          <p className="story-text">
            Kip grinned and grabbed her skateboard. “Race you to the next fall!”
          </p>
          <p className="story-text">Sam laughed. “I think I’ll walk.”</p>
          <p className="story-text">
            Practicio placed a gentle hand on his shoulder.
          </p>
          <p className="story-text">
            “You’ve seen the island now. The Almosts. The Could-Have-Beens. But
            you, Sam? You’re not done yet. And <em>that</em> makes all the
            difference.”
          </p>
          <p className="story-text">The sky shimmered.</p>
          <p className="story-text">The world softened.</p>
          <p className="story-text">And then—</p>
          <ChapterTitle id="chapter-6" name="Chapter Six: The First Trick" />

          <p className="story-text">Sam woke up.</p>
          <p className="story-text">
            The driveway was back. So was the yo-yo. But the knot didn&#39;t
            judge him anymore.
          </p>
          <p className="story-text">His grip was different now.</p>
          <p className="story-text">
            He untied the knot carefully. Rewound the string. Took a breath.
          </p>
          <p className="story-text">And tried again.</p>
          <p className="story-text">
            The yo-yo dipped, spun, wobbled—and bounced.
          </p>
          <p className="story-text">Not perfect.</p>
          <p className="story-text">Not even close.</p>
          <p className="story-text">
            But it was the first time it didn’t feel like a failure.
          </p>
          <p className="story-text">
            <em>It felt like a beginning.</em>
          </p>
          <p className="story-text">
            And somewhere, quiet and patient, the wind shifted again—
            <br />
            as if wondering when he might return.
          </p>
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
