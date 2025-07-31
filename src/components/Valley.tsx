// src/components/Animated404.tsx
import { motion } from "framer-motion";
import FontSizeAdjuster from "./FontSizeAdjuster";

export default function Village() {
  return (
    <>
      <FontSizeAdjuster />
      <motion.div
        className="max-w-2xl mb-8 mt-8 book-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          <img
            src="/valley-cover.webp"
            alt="Village of Voicekeepers"
            className="w-full mb-4 rounded-lg shadow-lg"
          />
        </p>
        <br />
        <br />
        <a
          href="https://junothreadborne.me/docs/The%20Valley%20of%20Yet-Stills.pdf"
          className="underline mb-8"
        >
          Download the PDF here.
        </a>
        <hr />
        <div>
          <h1 className="chapter-title">The Valley of Yet-Stills</h1>
          <p className="story-text">by Juno Threadborne</p>
          <p className="story-text">
            <em>Book 2 of The Elsebeneath series</em>
          </p>
          <p className="story-text">
            <em>
              Listen to the Audiobook (narrated by <a href="/lumina">Lumina</a>{" "}
              with music provided by{" "}
              <a
                className="underline"
                href="https://pixabay.com/users/9096471/"
              >
                Geoff Harvey
              </a>
              ).
            </em>
          </p>
          <audio controls className="w-full mb-4">
            <source src="/audio/tvoys.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <h1 className="chapter-title">
            Chapter One: The Trick That Wouldn&#39;t Land
          </h1>
          <p className="story-text">Sam stood in the driveway again.</p>
          <p className="story-text">Same spot. Same shoes. Same yo-yo.</p>
          <p className="story-text">
            It wasn&#39;t tangled anymore. It wasn&#39;t broken.
            <br />
            He&#39;d been practicing. Every day.
            <br />
            He could do &quot;Walk the Dog&quot; now. &quot;Rock the Baby,&quot;
            too.
            <br />
            He could make the yo-yo sleep, loop, even climb the string like it
            was a mountain goat.
          </p>
          <p className="story-text">
            But the trick he wanted—the one Jamie always nailed without
            thinking—just wouldn&#39;t land.
          </p>
          <p className="story-text">Sam stared at the yo-yo in his palm.</p>
          <p className="story-text">
            He&#39;d thrown it. Caught it. Reset it. Over and over.
            <br />
            He knew the motion by heart.
            <br />
            He&#39;d watched tutorials. He&#39;d slowed it down.
            <br />
            He&#39;d even practiced in front of a mirror.
          </p>
          <p className="story-text">
            But every time, just before the moment that mattered...
          </p>
          <p className="story-text">...it wobbled.</p>
          <p className="story-text">And flopped.</p>
          <p className="story-text">And failed.</p>
          <p className="story-text">Again.</p>
          <p className="story-text">
            He didn&#39;t yell. He didn&#39;t cry. He just sat down on the curb,
            elbows on his knees, chin in his hands.
          </p>
          <p className="story-text">
            This time, it wasn&#39;t frustration that curled in his chest.
          </p>
          <p className="story-text">
            It was something quieter.
            <br />
            Something heavier.{" "}
          </p>
          <p className="story-text">
            &quot;I&#39;m doing everything right,&quot; he whispered.
          </p>
          <p className="story-text">The breeze didn&#39;t answer.</p>
          <p className="story-text">
            But it <em>shifted</em>.
          </p>
          <p className="story-text">
            Gently. Like the whole world had tilted, just a little.
          </p>
          <p className="story-text">
            The clouds turned lavender. The sunlight softened into something
            stranger. Sam blinked, and the curb was already fading.
          </p>
          <p className="story-text">No island this time.</p>
          <p className="story-text">Just grass. Soft and tall.</p>
          <p className="story-text">Just sky. Wide and listening.</p>
          <p className="story-text">
            He stood slowly, yo-yo in hand, and looked around.
          </p>
          <p className="story-text">
            All he could see was a valley—open and slow.
            <br />
            The wind moved like it had nowhere to be.
            <br />
            The trees stretched lazily.
            <br />
            The mountains in the distance looked like they&#39;d been waiting
            forever.
          </p>
          <p className="story-text">And then—</p>
          <p className="story-text">
            From the edge of the valley came a slow, steady ticking.
          </p>
          <p className="story-text">Not loud.</p>
          <p className="story-text">Not hurried.</p>
          <p className="story-text">Just enough to say:</p>
          <blockquote className="story-callout">
            <p className="story-text">
              &quot;Things are still moving. Even now.&quot;
            </p>
          </blockquote>
          <p className="story-text">Sam took a breath.</p>
          <p className="story-text">And walked toward the sound.</p>
          <h1 className="chapter-title">Chapter Two: The Path with No Guide</h1>
          <p className="story-text">
            The grass swayed as he moved. Not like it was pushing him
            forward—more like it was letting him pass. Soft green blades
            brushing against his legs, whispering:{" "}
            <em>Okay. You&#39;re ready.</em>
          </p>
          <p className="story-text">
            After a few minutes—or maybe a hundred heartbeats—Sam paused.
          </p>
          <p className="story-text">He looked around.</p>
          <p className="story-text">
            It didn&#39;t feel like the island. Not exactly. But it felt like
            something that remembered it.
          </p>
          <p className="story-text">
            There was no Practicio. No smiling turtle with moss on his back. No
            kind voice pointing the way or explaining what came next.
          </p>
          <p className="story-text">Just hills and sky and quiet.</p>
          <p className="story-text">Sam frowned.</p>
          <p className="story-text">
            &quot;Guess I&#39;m the one doing the walking this time,&quot; he
            said aloud.
          </p>
          <p className="story-text">
            His voice didn&#39;t echo.
            <br />
            It didn&#39;t need to.
            <br />
            The valley heard him anyway.
          </p>
          <p className="story-text">
            Somewhere up ahead, the ticking sound continued—soft and steady,
            like the beat of a patient drum.
          </p>
          <p className="story-text">
            Sam adjusted the yo-yo string on his finger.
            <br />
            Not because he was about to use it.
            <br />
            Just because it helped.
          </p>
          <p className="story-text">
            He thought of Thimble&#39;s song fragment, still folded in his desk
            drawer.
          </p>
          <p className="story-text">
            He thought of Zoomie&#39;s muddy track, Inky&#39;s vanished oceans,
            and Kip&#39;s helmet full of dust.
          </p>
          <p className="story-text">
            He wasn&#39;t sure what he was walking toward.
            <br />
            But he knew what he was walking <em>with</em>.
          </p>
          <p className="story-text">
            &quot;Okay,&quot; he whispered. &quot;Let&#39;s see what this place
            has to teach.&quot;
          </p>
          <p className="story-text">And with that, he took the next step.</p>
          <p className="story-text">The breeze sighed in approval.</p>
          <p className="story-text">And the ticking grew closer.</p>
          <h1 className="chapter-title">
            Chapter Three: The Clockmaker and the Time That Wasn&#39;t
          </h1>
          <p className="story-text">
            The ticking grew louder—like a metronome keeping time with his feet.
          </p>
          <p className="story-text">
            Step... tick.
            <br />
            Step... tick.
          </p>
          <p className="story-text">
            The path curved gently, leading Sam toward a small rise. At the top
            was a crooked little shed, shaped like a teapot left out in the
            rain. Its roof slouched to one side. Smoke puffed from a crooked
            chimney, drifting upward in slow, spiral loops.
          </p>
          <p className="story-text">The door was open.</p>
          <p className="story-text">And inside—</p>
          <p className="story-text">
            <strong>Gears.</strong>
          </p>
          <p className="story-text">
            Dozens of them. Big ones, little ones, stacked and scattered like
            puzzle pieces that hadn&#39;t met yet. Some glowed faintly. Others
            were scratched, or bent, or made of things that didn&#39;t{" "}
            <em>look</em> like metal at all.
          </p>
          <p className="story-text">
            In the middle of the mess stood a woman in overalls, her hair tied
            back with a measuring tape. She was holding three gears in one hand
            and trying to sketch with the other, pencil tucked behind her ear,
            mouth full of muttered math.
          </p>
          <p className="story-text">She didn&#39;t look up right away.</p>
          <p className="story-text">
            &quot;Oh good,&quot; she said. &quot;You brought hands.&quot;
          </p>
          <p className="story-text">Sam blinked. &quot;I—what?&quot;</p>
          <p className="story-text">
            She waved him in with a distracted gesture. &quot;I&#39;ve been
            trying to build something that measures <em>progress</em>. Not time.
            Not clocks. Clocks are liars. All they do is count. I want something
            that <em>knows</em> when you&#39;re moving forward.&quot;
          </p>
          <p className="story-text">
            Sam stepped inside, careful not to bump anything.
          </p>
          <p className="story-text">
            &quot;It&#39;s… a little messy in here.&quot;
          </p>
          <p className="story-text">
            She grinned. &quot;Progress usually is.&quot;
          </p>
          <p className="story-text">
            She handed him a gear with a notch shaped like a lightning bolt.
          </p>
          <p className="story-text">
            &quot;This one turns when you try again after failing. Hold
            it.&quot;
          </p>
          <p className="story-text">He did.</p>
          <p className="story-text">It was warm.</p>
          <p className="story-text">
            She picked up another piece—this one shaped like a snail&#39;s
            shell. &quot;And this one only fits if you&#39;ve been
            patient.&quot;
          </p>
          <p className="story-text">
            &quot;What are you building?&quot; Sam asked, quietly.
          </p>
          <p className="story-text">She paused.</p>
          <p className="story-text">Then looked up at him with gentle eyes.</p>
          <p className="story-text">
            &quot;I don&#39;t know. Not yet. But I&#39;ll know it when it
            clicks.&quot;
          </p>
          <p className="story-text">Sam swallowed.</p>
          <p className="story-text">&quot;That&#39;s kind of... scary.&quot;</p>
          <p className="story-text">
            The clockmaker nodded. &quot;Yep. That&#39;s the point.&quot;
          </p>
          <p className="story-text">
            She walked over to a table full of odd-shaped parts and held one up.
            It looked like a pocketwatch, but with no hands—just a single open
            space in the middle.
          </p>
          <p className="story-text">
            &quot;Sometimes progress doesn&#39;t <em>tick</em>. It hums. Or
            waits. Or sits real still until something inside you catches
            up.&quot;
          </p>
          <p className="story-text">
            Sam looked at the piece in his hand again.
          </p>
          <p className="story-text">&quot;So… what if it never clicks?&quot;</p>
          <p className="story-text">
            She smiled, and gently placed the empty watch-body in his palm.
          </p>
          <p className="story-text">
            &quot;Then you keep building anyway. Because one day, you&#39;ll
            look up—and realize it&#39;s been working all along.&quot;
          </p>
          <p className="story-text">
            He stared at it. It wasn&#39;t shiny. It wasn&#39;t loud.
            <br />
            But it felt like it was already remembering something.
          </p>
          <p className="story-text">
            &quot;Take it,&quot; she said. &quot;For when you forget that
            forward isn&#39;t always fast.&quot;
          </p>
          <p className="story-text">
            The ticking faded behind him—
            <br />
            Still irregular.
            <br />
            Still messy.
            <br />
            Like... progress.
          </p>
          <h1 className="chapter-title">
            Chapter Four: The Gardener and the Seeds That Wait
          </h1>
          <p className="story-text">
            The path from the clockmaker&#39;s shed wound downhill, past tufts
            of wild lavender and stones arranged in quiet spirals. The ticking
            in Sam&#39;s pocket had faded, but not vanished. Now it felt more
            like... a pulse. A reminder.
          </p>
          <p className="story-text">
            He followed the trail until the landscape began to change.
          </p>
          <p className="story-text">
            The grass grew taller. The wind gentler.
            <br />
            And the trees? They didn&#39;t loom. They listened.
          </p>
          <p className="story-text">
            Ahead, a low fence made of mismatched sticks framed a garden—not the
            kind from storybooks, all carrots and cheerful tomatoes. This one
            was full of <strong>dirt</strong>. Just dirt. Row after row of dark,
            waiting soil.
          </p>
          <p className="story-text">
            In the middle, kneeling beside a patch, was a man in overalls—worn
            but clean. His sleeves were rolled up. His fingernails were full of
            earth. He was humming something tuneless and slow, like he&#39;d
            forgotten the melody long ago but liked the shape of it anyway.
          </p>
          <p className="story-text">He didn&#39;t look up when Sam arrived.</p>
          <p className="story-text">
            &quot;They&#39;re not sprouting yet,&quot; the man said softly.
          </p>
          <p className="story-text">
            Sam peered over the fence.
            <br />
            The garden looked empty.
            <br />
            But somehow, it didn&#39;t <em>feel</em> empty.
          </p>
          <p className="story-text">
            &quot;Are you sure there&#39;s anything <em>in</em> there?&quot; he
            asked.
          </p>
          <p className="story-text">
            The man smiled. &quot;Oh yes. I planted them myself. Some yesterday.
            Some weeks ago. A few... years, maybe.&quot;
          </p>
          <p className="story-text">
            Sam blinked. &quot;And you&#39;re still waiting?&quot;
          </p>
          <p className="story-text">The gardener nodded.</p>
          <p className="story-text">
            &quot;You don&#39;t rush a seed. You make space for it. And you stay
            kind to it. Even when nothing happens.&quot;
          </p>
          <p className="story-text">
            He reached into a small pouch and pulled out a{" "}
            <strong>single, pale-blue seed</strong>—small, oval, faintly glowing
            like a memory of starlight.
          </p>
          <p className="story-text">
            &quot;This one&#39;s a long-term sort. Won&#39;t bloom until
            you&#39;ve forgotten you planted it.&quot;
          </p>
          <p className="story-text">He held it out.</p>
          <p className="story-text">
            Sam hesitated. &quot;What if I lose it?&quot;
          </p>
          <p className="story-text">&quot;You won&#39;t. Not really.&quot;</p>
          <p className="story-text">
            Sam took it gently and cupped it in both hands.
            <br />
            It was warm, but quiet. Like a hope still learning how to speak.
          </p>
          <p className="story-text">
            He looked at the rows of earth again.
            <br />
            Still nothing growing. Still no green.
          </p>
          <p className="story-text">
            &quot;Don&#39;t you get discouraged?&quot; he asked.
          </p>
          <p className="story-text">
            The gardener leaned back on his heels, wiped his hands, and looked
            up at the sky like it was answering him in its own time.
          </p>
          <p className="story-text">
            &quot;Sometimes. But the thing about tending something is... it
            changes <em>you</em>, too. You think you&#39;re waiting on it. But
            really? It&#39;s waiting on you.&quot;
          </p>
          <p className="story-text">
            Sam tucked the seed into his pocket—beside the watch.
            <br />
            He wasn’t sure what it would become. But he wanted to wait for it.
          </p>
          <p className="story-text">
            As he turned to go, the gardener added one last thought:
          </p>
          <p className="story-text">
            &quot;Water it with patience. Trust it with silence. And when it
            blooms...&quot;
            <br />
            He smiled. &quot;You&#39;ll know what it&#39;s for.&quot;
          </p>
          <p className="story-text">
            Sam walked on, down a path lined with small, quiet signs of growth.
            <br />
            Not obvious. Not loud. But there, if you looked closely.
          </p>
          <p className="story-text">
            The kind of things that wait for you to catch up.
          </p>
          <h1 className="chapter-title">
            Chapter Five: The Shadow and the Mirror That Listens
          </h1>
          <p className="story-text">The air grew cooler as Sam walked.</p>
          <p className="story-text">
            Not cold—just still. Like a library you didn&#39;t know you&#39;d
            stepped into.
          </p>
          <p className="story-text">
            The trees here leaned a little closer. The light came in thin, quiet
            slices through their branches. The grass felt soft beneath his
            shoes, but heavier somehow, like it was remembering something.
          </p>
          <p className="story-text">Sam didn&#39;t hear a sound.</p>
          <p className="story-text">Not at first.</p>
          <p className="story-text">But then—</p>
          <p className="story-text">A whisper.</p>
          <p className="story-text">Not words.</p>
          <p className="story-text">Not quite.</p>
          <p className="story-text">
            More like thoughts that hadn&#39;t decided to become words yet.
          </p>
          <p className="story-text">
            He turned a corner in the path, and there it was.
          </p>
          <p className="story-text">
            A clearing, ringed with tall, dark pines.
            <br />
            And in the center: <strong>a mirror.</strong>
          </p>
          <p className="story-text">
            It stood upright, without a frame. Its surface was dim and
            dappled—like moonlight through water. And crouched before it, barely
            visible, was a figure made of... nothing.
          </p>
          <p className="story-text">
            <strong>Shadow.</strong>
          </p>
          <p className="story-text">
            It shifted when he looked at it.
            <br />
            Not like it moved.
            <br />
            Like it had always been in a different shape until now.
          </p>
          <p className="story-text">Sam stepped forward.</p>
          <p className="story-text">The figure whispered.</p>
          <blockquote className="story-callout">
            <p className="story-text">
              &quot;Why try again? You&#39;ll only mess it up.&quot;
            </p>
          </blockquote>
          <p className="story-text">Sam flinched.</p>
          <p className="story-text">
            It hadn&#39;t said it out loud.
            <br />
            But he&#39;d heard it.
            <br />
            In his chest.
          </p>
          <p className="story-text">The figure grew taller.</p>
          <blockquote className="story-callout">
            <p className="story-text">
              &quot;They were better than you. Jamie. Thimble. Even Zoomie. They{" "}
              <em>knew</em> who they were.&quot;
            </p>
          </blockquote>
          <p className="story-text">Sam clenched his fists.</p>
          <p className="story-text">&quot;I don&#39;t believe you.&quot;</p>
          <p className="story-text">
            The shadow flickered.
            <br />
            Almost spoke.
            <br />
            But let the silence answer instead.
          </p>
          <blockquote className="story-callout">
            <p className="story-text">&quot;You do. Sometimes.&quot;</p>
          </blockquote>
          <p className="story-text">He didn’t answer. Not out loud.</p>
          <p className="story-text">
            The mirror shimmered. Sam stepped toward it.
          </p>
          <p className="story-text">He expected to see himself.</p>
          <p className="story-text">He didn&#39;t.</p>
          <p className="story-text">Not at first.</p>
          <p className="story-text">
            He saw a version of himself with his yo-yo snapped in half. His eyes
            downcast. His shoulders slumped. The look of <em>giving up</em>.
          </p>
          <p className="story-text">He turned away.</p>
          <p className="story-text">But something tugged at him.</p>
          <p className="story-text">He turned back.</p>
          <p className="story-text">
            This time, the mirror showed something different:
          </p>
          <p className="story-text">
            <strong>Him. Trying.</strong>
            <br />
            Not winning. Not perfect.
            <br />
            Just <em>still there</em>.
          </p>
          <p className="story-text">
            And next to him, a familiar shape:
            <br />
            Thimble&#39;s song.
            <br />
            Zoomie&#39;s poster.
            <br />
            Inky&#39;s brush.
            <br />
            The watch. The seed.
          </p>
          <p className="story-text">
            Everything he&#39;d gathered.
            <br />
            Proof.
            <br />
            That he hadn&#39;t stopped.
          </p>
          <p className="story-text">The shadow shrank.</p>
          <p className="story-text">
            Sam stepped toward the mirror and placed his hand against it.
          </p>
          <p className="story-text">It was cold.</p>
          <p className="story-text">But not cruel.</p>
          <p className="story-text">A quiet voice—his own—echoed back:</p>
          <blockquote className="story-callout">
            <p className="story-text">
              &quot;I hear you. But I&#39;m not done yet.&quot;
            </p>
          </blockquote>
          <p className="story-text">
            And then—
            <br />
            The mirror cracked.
          </p>
          <p className="story-text">Not shattered.</p>
          <p className="story-text">
            Just a single, perfect line through the center.
          </p>
          <p className="story-text">A fracture that gleamed like hope.</p>
          <p className="story-text">
            The shadow faded, curling inward like mist.
          </p>
          <p className="story-text">
            Where it had stood, a single shard remained.
          </p>
          <p className="story-text">Sam picked it up.</p>
          <p className="story-text">
            And for a moment—just a moment—he felt taller than he was.
          </p>
          <h1 className="chapter-title">
            Chapter Six: The Cat and the Stars That Haven&#39;t Shown
          </h1>
          <p className="story-text">
            The path opened wider again, curving along the edge of a low ridge
            where the trees grew thin and the sky grew wide. The air smelled
            like cool grass and distant rain.
          </p>
          <p className="story-text">
            The sun hadn&#39;t gone down—but somehow, the stars were already
            there.
          </p>
          <p className="story-text">Faint. Wandering. Unfinished.</p>
          <p className="story-text">Sam stopped walking.</p>
          <p className="story-text">
            Above him, the sky rippled like a pond in reverse—soft indigos and
            bruised purples blending upward into lavender. But only a few stars
            had found their places. The rest blinked in and out, like they were
            still deciding whether to arrive.
          </p>
          <p className="story-text">
            Near the edge of the ridge sat a <strong>cat</strong>.<br />
            Still. Graceful. Tail curled around her paws.
          </p>
          <p className="story-text">
            She was black, but not shadow. More like midnight ink spilled across
            moonlight. A thin silver chain hung loosely around her neck, from
            which a tiny telescope charm dangled.
          </p>
          <p className="story-text">She was looking up.</p>
          <p className="story-text">
            &quot;What are you looking at?&quot; Sam asked softly.
          </p>
          <p className="story-text">She didn&#39;t look down.</p>
          <p className="story-text">
            &quot;The ones that haven&#39;t arrived yet.&quot;
          </p>
          <p className="story-text">
            Sam tilted his head. &quot;How do you know they&#39;re coming?&quot;
          </p>
          <p className="story-text">
            The cat&#39;s eyes flicked toward him.
            <br />
            Green. Bright. Tired in the way only patience can be.
          </p>
          <p className="story-text">
            &quot;I don&#39;t. Not for sure. But I like being here when they
            do.&quot;
          </p>
          <p className="story-text">Sam stepped closer. Sat beside her.</p>
          <p className="story-text">They watched together for a while.</p>
          <p className="story-text">One star blinked into place.</p>
          <p className="story-text">&quot;Is that one new?&quot; he asked.</p>
          <p className="story-text">
            She shook her head. &quot;Old. Just finally brave enough to
            shine.&quot;
          </p>
          <p className="story-text">
            He looked at her necklace. &quot;What&#39;s that for?&quot;
          </p>
          <p className="story-text">
            She raised a paw and tapped the telescope charm.
          </p>
          <p className="story-text">
            &quot;To remind me to look farther—especially when I feel like
            stopping.&quot;
          </p>
          <p className="story-text">Sam nodded slowly, and sighed.</p>
          <p className="story-text">
            “I’ve been trying a trick. For weeks. It just… won’t show up.”
          </p>
          <p className="story-text">
            The cat didn&#39;t say anything for a long time.
          </p>
          <p className="story-text">Then:</p>
          <p className="story-text">
            &quot;Some things don&#39;t show up when you <em>try</em>. They show
            up when you <em>listen</em>.&quot;
          </p>
          <p className="story-text">
            She reached behind her with a paw and nudged something toward him—a
            small, folded <strong>star chart</strong>. Most of it was blank. But
            one constellation near the top had a single word written beside it:
            <br />
            <strong>&quot;Almost.&quot;</strong>
          </p>
          <p className="story-text">
            &quot;Take it,&quot; she said. &quot;You&#39;ll know how to finish
            it when the time is right.&quot;
          </p>
          <p className="story-text">
            Sam unfolded it. The paper was soft like dried petals.
          </p>
          <p className="story-text">
            He looked up again.
            <br />
            One more star had joined the sky.
          </p>
          <p className="story-text">Not a lot.</p>
          <p className="story-text">But enough.</p>
          <h1 className="chapter-title">
            Chapter Seven: The Trick That Still Doesn&#39;t Work
          </h1>
          <p className="story-text">The path curved back toward itself.</p>
          <p className="story-text">
            Not in a circle, exactly. More like a loop—one you could walk again
            if you needed to.
          </p>
          <p className="story-text">
            He passed the garden. The shed. The cracked mirror now covered in
            soft moss. He walked through the quiet trees until the path grew
            faint, then fainter, then gone.
          </p>
          <p className="story-text">And then—</p>
          <p className="story-text">He blinked.</p>
          <p className="story-text">And the world around him blinked back.</p>
          <p className="story-text">He was back in the driveway.</p>
          <p className="story-text">
            Same curb. Same sky. Same yo-yo in his hand.
          </p>
          <p className="story-text">
            The string was neat. The trick was waiting.
          </p>
          <p className="story-text">
            Sam stared at it. His hands didn&#39;t shake.
          </p>
          <p className="story-text">
            Not because he was certain.
            <br />
            But because he&#39;d learned something more useful than certainty.
          </p>
          <p className="story-text">He tried the trick.</p>
          <p className="story-text">
            <strong>Swing. Arc. Flip. Miss.</strong>
          </p>
          <p className="story-text">It hit the ground and bounced sideways.</p>
          <p className="story-text">But this time—he didn&#39;t wince.</p>
          <p className="story-text">
            He just reached down, picked it up, and tried again.
          </p>
          <p className="story-text">
            <strong>Swing. Arc. Twist. Drop.</strong>
          </p>
          <p className="story-text">Still not there.</p>
          <p className="story-text">Still not right.</p>
          <p className="story-text">
            But something in his chest was <em>quietly glowing</em>.
          </p>
          <p className="story-text">
            He pulled the yo-yo in.
            <br />
            Checked the string.
            <br />
            And tried again.
          </p>
          <p className="story-text">And in his pocket, things waited:</p>
          <p className="story-text">
            A handless watch.
            <br />A pale blue seed.
            <br />A mirror shard.
            <br />A half-written constellation.
          </p>
          <p className="story-text">Not trophies.</p>
          <p className="story-text">Not magic.</p>
          <p className="story-text">
            Just <em>reminders</em>.
          </p>
          <p className="story-text">That he&#39;d been there.</p>
          <p className="story-text">That he&#39;d kept going.</p>
          <p className="story-text">That he still could.</p>
          <p className="story-text">He smiled.</p>
          <p className="story-text">Tried the trick again.</p>
          <p className="story-text">
            And somewhere—just barely—
            <br />
            the Elsebeneath leaned in.
            <br />
            And waited with him.
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
      </motion.div>
      <div className="row py-2 lg:py-0 items-center flex-wrap-reverse">
        <div className="text-center lg:col-6 lg:mb-0 lg:text-left">
          <ul>
            <li className="m-2 inline-block">
              &copy; Juno Threadborne 2025{" "}
              <a href="https://thrd.me/mirror">✨</a>
            </li>
          </ul>
        </div>
        <div className="text-center lg:col-6 lg:my-0 flex items-center justify-center lg:justify-end">
          <div className="kofi-button">
            <a
              href="https://thrd.me/tip"
              type="button"
              onClick={() => {
                gtag("event", "tip_click", {
                  story_title: `The Valley of Yet-Stills`,
                  source_page: window.location.pathname,
                  destination: "${entry.data.readLink}",
                  event_category: "engagement",
                });
              }}
              className="text-white bg-[#3b5998] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              <img
                src="https://storage.ko-fi.com/cdn/logomarkLogo.png"
                alt="Ko-fi donations"
              />
              &emsp;Fuel the Next Chapter
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
