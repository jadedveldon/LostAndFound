export type JournalBlock =
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "promo"; text: string; hashtags: string[] };

export interface JournalPost {
  slug: string;
  title: string;
  category: string;
  date: string; // display string, e.g. "MAY 05, 2026"
  sortDate: string; // ISO for sorting
  readTime: number;
  excerpt: string;
  heroImage: string;
  heroAlt: string;
  author: string;
  authorImage: string;
  body: JournalBlock[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: "the-rise-of-slow-travel",
    title: "The Rise of Slow Travel: Why People Are Tired of Seeing Everything",
    category: "SLOW TRAVEL",
    date: "MAY 05, 2026",
    sortDate: "2026-05-05",
    readTime: 6,
    excerpt:
      "You're not alone if you need a vacation to recover from your vacation. Here's why slow, intentional travel is replacing the checklist itinerary.",
    heroImage: "/images/journal/slow-travel-hero.jpg",
    heroAlt: "A group walking beneath a forest of orange torii gates",
    author: "Tanya, L&F Founder",
    authorImage: "/images/Tanya.png",
    body: [
      {
        type: "p",
        text: "Have you ever felt like you need more time after a vacation? You're not alone. Most of us rush to try & see everything on our itinerary before the trip ends.",
      },
      {
        type: "p",
        text: "This fast pace of travel can leave us feeling exhausted & overwhelmed. We often choose to spend 7 minutes at a spot for a photo, because “a pic or it didn't happen” and often forget to really learn or connect with the place we're visiting.",
      },
      {
        type: "p",
        text: "**Slow Travel** on the other hand, is a new way to travel where you give more importance to how you're feeling while visiting a place rather than just doing the “cool things on a list because you need a picture.”",
      },
      {
        type: "p",
        text: "By experiencing a place slowly, intentionally & peacefully, you truly get to discover it. You become a part of the streets, culture, a routine & don't just visit a place as a tourist. **Slow Travel means choosing curiosity over a travel checklist.**",
      },
      { type: "h3", text: "What Slow Travel Truly Teaches You" },
      {
        type: "list",
        items: [
          "Vacations need to be restorative, not a race to check off every tourist site.",
          "The traditional checklist approach often leads to burnout and superficial experiences.",
          "Prioritizing quality over quantity fosters deeper connections with new destinations.",
          "Lingering in one location allows for real cultural immersion.",
          "Shifting your perspective transforms a simple trip into a life-changing journey.",
        ],
      },
      { type: "h2", text: "The Modern Plague of Decision Fatigue" },
      {
        type: "p",
        text: "Remember the days you'd probably only make 35 decisions a day?",
      },
      {
        type: "p",
        text: "Humans now spend their days making 35,000 micro decisions with multiple tabs constantly open in their head & that's honestly kind of insane.",
      },
      {
        type: "p",
        text: "If you feel like your brain is a browser with too many tabs open, you're not alone. We live in a world that demands constant input. This forces us to make hundreds of micro-choices from waking up until we hit the bed. This cycle leads to **decision fatigue**, making us feel drained before the day starts on most days.",
      },
      {
        type: "image",
        src: "/images/journal/slow-travel-decision-fatigue.jpg",
        alt: "A reminder that too many choices can be exhausting",
      },
      { type: "h4", text: "The Daily Grind of Choosing" },
      {
        type: "p",
        text: "Think about your morning routine. You check your phone & there is a list of micro decisions you're making without even your knowledge. Your brain is flooded by so much information you didn't ask to see as soon as you wake up. You decide what to wear, what to eat, and how to navigate the morning traffic. By the time you reach your desk, you've already used up a lot of your *cognitive battery*.",
      },
      {
        type: "p",
        text: "This **decision fatigue** is real and it drains your willpower. *When you're forced to make endless choices, your brain looks for shortcuts*. You might choose the easiest option, not the best, because you're out of mental energy.",
      },
      { type: "h3", text: "Why Your Brain Needs a Vacation from Decisions" },
      {
        type: "p",
        text: "When you plan a trip, you often over-schedule. You treat your vacation like a high-stakes project, mapping out every hour, because your brain thinks “I deserve this break, I NEED to enjoy every minute of it and see everything I can.” Instead of thinking about what's the best way for my body and mind to relax, you are only adding on more stress to your day. **When was the last time you woke up and let the day experience you?**",
      },
      {
        type: "p",
        text: "Your brain doesn't need another itinerary filled with complex logistics and deadlines. It needs a real break from the pressure of choosing. *True relaxation comes when you stop managing your time like a CEO and start living in the moment.*",
      },
      {
        type: "p",
        text: "By choosing a slower pace, you allow your mind to recover from the *constant noise* of daily life. Giving yourself permission to do less is the ultimate luxury. It's time to stop treating your travel plans as a checklist and start treating them as a much-needed **mental sanctuary**.",
      },
      { type: "h2", text: "The Illusion of the Optimized Itinerary" },
      {
        type: "p",
        text: "Vacations are often seen as military missions, with every minute mapped out. This can suck the joy out of the trip. A color-coded spreadsheet might seem like the answer, but it's often the main cause of *travel fatigue*.",
      },
      {
        type: "p",
        text: "By trying to control everything, you turn whatever free time you get in your day now into a stressful task before the trip even starts. Yes, it's exciting, but you don't realize what it is doing to your brain in the name of excitement.",
      },
      { type: "h3", text: "The Exhaustion of Over-Planning" },
      {
        type: "p",
        text: "Many travelers fall into the trap of planning every detail. Weeks are spent finding the best cafes and routes. This level of planning creates a false sense of control.",
      },
      { type: "p", text: "But, when a train is late or a shop is closed, it all falls apart." },
      { type: "p", text: "Think about the costs of this planning:" },
      {
        type: "list",
        items: [
          "**Decision paralysis:** You spend more time choosing than enjoying.",
          "**Rigidity:** You miss out on spontaneous finds because of your schedule.",
          "**Mental drain:** Your brain is always in \"manager mode.\"",
        ],
      },
      { type: "h3", text: "You Are Tired Before You Even Leave" },
      {
        type: "p",
        text: "By the time you hit the airport, you're already tired. The weight of your schedule feels like a heavy backpack. This is where **a travel curator** saves your sanity.",
      },
      {
        type: "p",
        text: "Try leaving the over-planning to a travel curator. They are already trained to look out for the experience you need to have, suggest things you should do or shouldn't do and give you the relief of not having to google every inch of another country. They also allow you the space to enjoy an anti-itinerary trip.",
      },
      {
        type: "p",
        text: "An *anti itinerary travel* approach lets you arrive feeling excited, not exhausted. When you stop racing against time, you can truly rest.",
      },
      {
        type: "p",
        text: "Remember, you want to return home feeling refreshed, not exhausted from your own planning. **Less planning means more living.**",
      },
      { type: "h2", text: "Why Slow Travel is the Antidote to Tourist Burnout" },
      {
        type: "p",
        text: "Imagine a vacation where your biggest stress is choosing which book to finish by the pool. Or what you're wearing for lunch. For many, the modern holiday has become a high-stakes race against the clock. You likely return home feeling more exhausted than when you left, which is a clear sign of **travel fatigue**.",
      },
      {
        type: "quote",
        text: "Slow Travel acts as a gentle reset button for your overstimulated nervous system.",
      },
      {
        type: "p",
        text: "By intentionally slowing your pace, you stop treating your itinerary like a corporate project. This shift helps you bypass the **decision fatigue** that plagues so many travelers today.",
      },
      { type: "h3", text: "Redefining What a Successful Trip Looks Like" },
      {
        type: "p",
        text: "Success is often measured by the number of landmarks checked off a list. But this approach ignores the actual quality of your experience. Instead of rushing to capture the perfect photo, consider these markers of a truly successful journey:",
      },
      {
        type: "list",
        items: [
          "Connecting deeply with local culture and people.",
          "Allowing for spontaneous detours without guilt.",
          "Prioritizing rest as much as sightseeing.",
          "Returning home feeling genuinely restored.",
        ],
      },
      {
        type: "p",
        text: "When you stop chasing quantity, you open the door to meaningful discovery. You might find that a quiet afternoon in a local cafe provides more insight into a destination than a hurried city tour ever could.",
      },
      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "What exactly is slow travel, and why should I stop treating my vacation like a marathon?",
            a: "**Slow travel** is like the \"farm-to-table\" movement for tourists. It's about enjoying one place deeply, slowly, intentionally, instead of rushing around. It's better because it helps you avoid travel burnout and enjoy your trip more.",
          },
          {
            q: "I find myself getting angry at my spreadsheets before I even leave. Is this normal?",
            a: "Yes, it's common. It's called **decision fatigue**. With too many choices, like on Google Maps, our brains get tired. **Slow travel** (without a stressful itinerary) helps you relax and enjoy your trip without stress.",
          },
          {
            q: "Isn't an anti itinerary travel approach just a fancy way of being lazy?",
            a: "No, it's about taking care of yourself. **Anti itinerary travel** means you can be spontaneous and enjoy the moment. A curator suggests a list of things to do, experiences to explore but without any rigidity and you don't have to plan it out. It's about choosing experiences based on how you're feeling over checking off a list.",
          },
          {
            q: "What makes slow luxury travel different from just staying at an expensive hotel?",
            a: "Slow luxury is about enjoying your time, not just where you stay. You could also choose to live eco consciously, a small farm or a tent by the river. It's about having quality experiences that slow you down and allow you to spend more time doing one activity, like a cooking class or dance class. It's about taking your time and feeling refreshed.",
          },
          {
            q: "How do I deal with the FOMO of not seeing every major landmark?",
            a: "Trade FOMO for the \"Joy of Missing Out.\" **Intentional travel** means you don't need to see everything. You need to be content with having fun and that comes from letting go and being present. Usually a meal that wasn't hurried or a nap you took when you really wanted to is what stays with you.",
          },
          {
            q: "I'm ready to quit the \"checklist\" life. How do I start planning my next intentional escape?",
            a: "Start by doing less. Choose one place and stay longer. Leave some days blank. If you need help, contact us at curators@lostandfoundtravel.in. We'll help you plan a trip that focuses on your well-being.",
          },
        ],
      },
      {
        type: "promo",
        text: "Are you tired of returning from vacations feeling more exhausted than when you left? **It's time to embrace the Slow Travel movement and revolutionize your approach to travel.**\n\nIn today's fast-paced world, we often prioritize efficiency over experience. However, this approach can lead to burnout and superficial travel experiences. Slow Travel offers a refreshing alternative, focusing on depth over breadth and quality over quantity.\n\n**Key benefits of Slow Travel:**\n• Reduced decision fatigue\n• Deeper cultural immersion\n• More authentic experiences\n• Improved work-life balance\n\nBy adopting Slow Travel principles, you can transform your vacations into rejuvenating experiences that leave you feeling refreshed and inspired. It's not about seeing everything; it's about truly experiencing what matters.\n\nReady to redefine your travel philosophy? Let's discuss how Slow Travel can benefit you and your organization in the comments below.",
        hashtags: ["#SlowTravel", "#IntentionalTravel", "#WorkLifeBalance", "#TravelIndustry"],
      },
    ],
  },

  {
    slug: "decision-fatigue-is-ruining-travel",
    title: "Decision Fatigue Is Ruining Travel (And Nobody Talks About It)",
    category: "DECISION FATIGUE",
    date: "MAY 12, 2026",
    sortDate: "2026-05-12",
    readTime: 7,
    excerpt:
      "The average adult makes over 35,000 choices a day. By the time you book your next trip, your brain is already tired — here's how to get your excitement back.",
    heroImage: "/images/journal/decision-fatigue-hero.jpg",
    heroAlt: "A quiet, cinematic scene of stillness in the grass",
    author: "Tanya, L&F Founder",
    authorImage: "/images/Tanya.png",
    body: [
      {
        type: "p",
        text: "Did you know the average adult makes over 35,000 choices every day? By the time you book your next trip, your brain is tired. You start excited but soon feel overwhelmed by too many options.",
      },
      {
        type: "p",
        text: "This **mental exhaustion** makes your vacation feel like another stressful task. You want to relax, but you end up more tired than before. This is called *decision fatigue travel*, and it steals your happiness.",
      },
      {
        type: "p",
        text: "Today's booking sites offer convenience but give you too many choices. You spend hours on small details instead of enjoying the excitement. It's time to stop overthinking and find peace before you even pack.",
      },
      { type: "h3", text: "Key Takeaways" },
      {
        type: "list",
        items: [
          "The average person makes 35,000 choices daily, leading to significant mental burnout.",
          "Planning a trip often feels like a chore due to an overwhelming number of online options.",
          "Excessive choices during the booking process diminish the excitement of your upcoming journey.",
          "Recognizing this mental strain is the first step toward a more intentional vacation experience.",
          "Simplifying your planning process helps you arrive at your destination feeling refreshed rather than drained.",
        ],
      },
      { type: "h3", text: "The Hidden Cost of Your Vacation" },
      {
        type: "p",
        text: "We've been told that a new place means a new start. You pack up and head to the airport, hoping for a fresh start. But for many, **work is overwhelming** even when they're far from their desk.",
      },
      { type: "h4", text: "The Myth of the Relaxing Getaway" },
      {
        type: "p",
        text: "Many believe that leaving home means relaxation. But planning a trip can be stressful. You spend weeks looking at reviews, comparing flights, and planning your trip.",
      },
      {
        type: "p",
        text: "By the time you arrive, you're already tired. You're not starting fresh; you're tired from all the planning. This is why many people feel they need another vacation after their first one.",
      },
      { type: "h4", text: "Why Your Brain Needs a Break from Your Break" },
      {
        type: "p",
        text: "Your brain can't handle the constant choices of modern life. When *work is overwhelming*, your brain is already tired. Adding trip planning to that is too much.",
      },
      {
        type: "p",
        text: "You need a real break from making decisions all the time. If you don't, you just move your stress from work to your vacation. To avoid **travel overwhelm**, treat your free time like a break from everything, not a new project.",
      },
      {
        type: "image",
        src: "/images/journal/decision-fatigue-break.jpg",
        alt: "Out of office, and meaning it",
      },
      { type: "h3", text: "Why Decision Fatigue Travel Is Killing Your Vibe" },
      {
        type: "p",
        text: "If you think a relaxing trip means endless scrolling, you're already caught in **decision fatigue travel**. You dream of a peaceful beach or a quiet mountain, but end up lost in browser tabs. This endless search for the \"perfect\" spot can leave you feeling drained before you even leave.",
      },
      { type: "h4", text: "The Paradox of Choice in Modern Tourism" },
      {
        type: "p",
        text: "We live in a world where information is endless, but our brains can't handle it. With thousands of hotels, flights, and dining options, choosing becomes overwhelming. Instead of feeling in control, you feel stuck by the sheer number of choices.",
      },
      {
        type: "p",
        text: "This is the paradox of choice. **Too many options can make you less happy** because you worry about missing something. You start to focus on the details rather than enjoying your trip.",
      },
      { type: "h4", text: "From 10 Things to Do to Total Paralysis" },
      {
        type: "p",
        text: "The shift from excitement to paralysis happens quickly. You begin with a few highlights, but soon get lost in reviews and social media tips. What should be fun planning turns into a *second job* you didn't sign up for.",
      },
      { type: "h4", text: "The Trap of Generic Travel Lists" },
      {
        type: "p",
        text: "Generic \"Top 10\" lists often cause **travel overwhelm**. They're made for everyone, not your unique style. Trying to fit your preferences into a generic plan takes away the joy of discovering something new.",
      },
      { type: "h4", text: "Why Research Fatigue Ruins the Anticipation" },
      {
        type: "p",
        text: "Research fatigue quietly kills the excitement of a trip. By the time you book, you've spent hours researching. You've already *lived* the trip in your mind, leaving little room for surprises. **Reclaiming your joy** means stepping back from research and trusting your instincts.",
      },
      { type: "h3", text: "Stop Googling and Start Living" },
      {
        type: "p",
        text: "Why do you treat your vacation like a research project? You spend too much time comparing prices and reading reviews. This endless searching kills your excitement before you even leave.",
      },
      {
        type: "p",
        text: "Your browser history is full of abandoned plans. By choosing to plan your travel with **Lost and Found Travel you can choose to reduce fatigue**, you let a pro handle the details and break the stress cycle. You get to be surprised when you are traveling and enjoy it intentionally.",
      },
      { type: "h3", text: "The Professional Advantage of a Travel Curator" },
      {
        type: "p",
        text: "Working with a **travel curator** changes your travel experience. You no longer guess about hotels. Instead, you get experiences that fit your style.",
      },
      {
        type: "p",
        text: "The main *travel advisor benefits* are insider tips and personalized advice. You become more than just a number. You're a guest with a custom itinerary.",
      },
      { type: "h3", text: "Why You Should Outsource Your Wanderlust" },
      {
        type: "p",
        text: "Outsourcing your wanderlust means gaining freedom, not losing control. An expert handles the complex bookings and timing. This saves you from costly mistakes.",
      },
      {
        type: "p",
        text: "A skilled **travel curator** knows how to avoid problems like transit delays. They take care of the hard stuff so you can enjoy your trip.",
      },
      { type: "h3", text: "Reclaiming Your Time for What Actually Matters" },
      {
        type: "p",
        text: "Think about the time lost staring at screens for logistics. Using **travel advisor benefits** means you get that time back.",
      },
      {
        type: "p",
        text: "You can learn local phrases or relax before your flight. *Your time is your most valuable asset*. Use it for making memories, not for searching.",
      },
      {
        type: "image",
        src: "/images/journal/decision-fatigue-personality.jpg",
        alt: "Two friends jumping off a boat, mid-adventure",
      },
      { type: "h2", text: "How We Turn Your Personality Into a Perfect Itinerary" },
      {
        type: "p",
        text: "Imagine a vacation where every detail feels made just for you. No more endless blogs to scroll through. We create **truly bespoke journeys** that match your vibe.",
      },
      { type: "h3", text: "Beyond the Tourist Traps" },
      {
        type: "p",
        text: "Most travel advice is for the masses, not you. You deserve more than a generic list of sights. We avoid crowded queues and overpriced shops.",
      },
      {
        type: "p",
        text: "With a **travel curator**, you find hidden gems. We focus on authenticity, not popularity. Your time is spent in places that resonate with you.",
      },
      { type: "h3", text: "The Art of Curated Travel Experiences" },
      {
        type: "p",
        text: "We focus on your unique personality, not a one-size-fits-all approach. We analyze what makes you tick. This is the heart of our *curated travel experiences*.",
      },
      { type: "h4", text: "Matching Destinations to Your Unique Rhythm" },
      {
        type: "p",
        text: "Do you love the energy of a city or the quiet of a mountain? We match your destination to your rhythm. Every stop is chosen to fit your energy and desire for discovery.",
      },
      { type: "h4", text: "We Decide, You Enjoy: The Ultimate Luxury" },
      {
        type: "p",
        text: "The greatest luxury is **freedom from decision fatigue**. You tell us what you like, and we handle the rest. As your **travel curator**, we take care of the details.",
      },
      {
        type: "p",
        text: "You just show up and enjoy. We handle the hard work. It's time to stop planning and start living.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Your next vacation should be more than just a list of tasks. You already deal with complex work and big decisions. Your free time should be a real break from all that.",
      },
      {
        type: "p",
        text: "We think travel should be simple. Letting a pro handle the details means no more endless searching. You get to just enjoy the trip.",
      },
      {
        type: "p",
        text: "**Travel should be easy** if you let someone else plan it. Just pack your bags and relax. Get ready to see the world in all its beauty.",
      },
      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "Why does planning a vacation feel as exhausting as my actual job?",
            a: "It's because of **decision fatigue**. Your brain gets tired from making too many choices at work. Looking at 500 hotel reviews in the evening can make your vacation planning feel like a second job.",
          },
          {
            q: "Can't I just use one of those \"10 Best Things to Do\" lists on the internet?",
            a: "Using those lists can lead to research fatigue. They're made for everyone without keeping your time frame or energy levels in mind. This can make your trip feel like a scavenger hunt instead of a relaxing getaway.",
          },
          {
            q: "What exactly are the travel advisor benefits compared to me just using AI?",
            a: "A travel advisor is like a personal filter for the world. They save you time and offer curated experiences vs AI, which will only suggest recommendations based on blogs & internet searches without understanding you and your true vibe. We handle the planning personalized to you, so you can just enjoy your trip.",
          },
          {
            q: "How do you ensure the trip actually matches my personality?",
            a: "We get to know you to create the perfect trip. We focus on your interests, whether you love adventure or quiet moments. We plan everything for you based on your interests so that it doesn't feel like a forced-upon travel agent's rigid plan.",
          },
          {
            q: "Is it really possible to have a completely stress-free vacation?",
            a: "Yes, it is. By letting us plan your trip, you avoid mental burnout. We handle all the details, so you can focus on enjoying your vacation.",
          },
        ],
      },
    ],
  },

  {
    slug: "why-honeymoons-shouldnt-feel-like-another-checklist",
    title: "Why Honeymoons Shouldn't Feel Like Another Checklist",
    category: "HONEYMOON",
    date: "MAY 19, 2026",
    sortDate: "2026-05-19",
    readTime: 5,
    excerpt:
      "Nearly 70% of couples feel more tired after their honeymoon than before it. Here's why slowing down — not seeing everything — is the real luxury.",
    heroImage: "/images/journal/honeymoon-hero.jpg",
    heroAlt: "A couple sharing a quiet moment in the mountains",
    author: "Tanya, L&F Founder",
    authorImage: "/images/Tanya.png",
    body: [
      {
        type: "p",
        text: "Did you know nearly 70% of couples feel more tired after their honeymoon? This is because they see it as the last thing on their wedding list.",
      },
      {
        type: "p",
        text: "In India, we often think we must see every landmark to make our trip worth it. We rush from place to place, trying to see everything. *This fast pace takes away the happiness from your first days as a couple.*",
      },
      {
        type: "p",
        text: "It's time to see things differently. Instead of rushing around, focus on **intentional rest**. With **luxury honeymoon planning**, you put your emotional health first, not a busy schedule or just about traveling with your partner finally.",
      },
      {
        type: "p",
        text: "Your time together is special and should be enjoyed slowly. Choosing quality over quantity helps you connect deeply without stress. It's time India invests in **luxury honeymoon planning** to make memories that refresh and inspire you.",
      },
      { type: "h2", text: "The Trap of the Indian Honeymoon Checklist" },
      {
        type: "p",
        text: "Why do we rush our honeymoon like it's a sightseeing marathon? In India, there's a big push to see every major spot. This makes couples focus on seeing lots of places, not enjoying each other's company.",
      },
      { type: "h3", text: "The Hidden Cost of Agent-Led Itineraries" },
      {
        type: "p",
        text: "Many families use travel agents for fast, packed trips. These agents fill every minute with activities. But this makes your honeymoon feel like a chore, not a chance to relax and learn about each other.",
      },
      {
        type: "p",
        text: "Choosing a **honeymoon without an itinerary** gives you freedom. You can change plans as you see fit, plan rest where it's needed and work on connecting with your partner the right way instead of spending your days tired & in constant rush.",
      },
      {
        type: "image",
        src: "/images/journal/honeymoon-hero.jpg",
        alt: "A couple enjoying their honeymoon together",
      },
      { type: "h2", text: "Embracing the Art of Slow Honeymoon Travel" },
      {
        type: "p",
        text: "Starting married life slowly is a great idea. After all the wedding planning, you need a break. **Slow honeymoon travel** helps you relax and deal with the post-wedding stress.",
      },
      { type: "h3", text: "Why Rest Is the Ultimate Luxury" },
      {
        type: "p",
        text: "Choosing to do nothing is a big deal in today's fast world. It's not about expensive trips, but about waking up whenever you want. This lets your body and mind heal from the wedding rush, unnecessary smiles & the 10k photos you had to take.",
      },
      {
        type: "p",
        text: "By not rushing to see places, you make a safe space for your relationship. This quiet time helps you enjoy your new life together. **Rest is the foundation** of your journey as a couple.",
      },
      { type: "h3", text: "Learning to Live Together After the Wedding Rush" },
      {
        type: "p",
        text: "Right after the wedding, you start living together for real. It's a time to learn and grow together. You need patience and understanding to enjoy this new chapter.",
      },
      {
        type: "p",
        text: "Notice the little things your partner does. Sharing meals or quiet walks can strengthen your bond. These moments help you connect on a deeper level.",
      },
      { type: "h4", text: "Creating Space for Spontaneous Connection" },
      {
        type: "p",
        text: "Having a flexible plan lets you discover new things together. A sudden sunset watch or a long chat can be the best part of your trip.",
      },
      {
        type: "quote",
        text: "Spontaneity is the heartbeat of a happy marriage, and it's best without a schedule.",
      },
      {
        type: "p",
        text: "**Romance & slowness** go hand in hand. When you slow down, you open up to laughter and real talks.",
      },
      {
        type: "image",
        src: "/images/journal/honeymoon-romance.jpg",
        alt: "A couple walking toward the ocean at sunset",
      },
      { type: "h2", text: "Redefining Luxury Honeymoon Planning" },
      {
        type: "p",
        text: "Your honeymoon should be a chance to relax after the wedding. True **luxury honeymoon planning** isn't about how much you spend or where you go. It's about enjoying time with your partner in a special place that celebrates your new life together.",
      },
      { type: "h3", text: "Moving Beyond the Standard Itinerary" },
      {
        type: "p",
        text: "Big agencies often stick to the same old plans without any new updates or suggestions. These plans make you rush from place to place and don't care about curating a plan that works for you. Curating with a *personalized curator means you get to take a back seat and still expect a trip curated just for you, your taste and your pace.*",
      },
      {
        type: "p",
        text: "Steering clear of the usual plans means you can have real experiences. A quiet morning on a private beach or a peaceful walk in a remote village might be more meaningful than seeing lots of sights. This way, your trip feels like a retreat, not a task.",
      },
      { type: "h3", text: "Curated Experiences That Prioritize Your Bond" },
      {
        type: "p",
        text: "The heart of **curated honeymoon planning** is focusing on your special bond. Every detail should bring you closer, whether through adventure or quiet moments. It's not just about booking a room; it's about creating a story for your marriage.",
      },
      {
        type: "p",
        text: "Think about experiences that let you learn something new or just enjoy each other's company. When your trip is tailored to your interests, the memories are more meaningful. *This turns a regular vacation into a key moment for your relationship.*",
      },
      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "What exactly is curated honeymoon planning, and how does it differ from a standard travel agent's package?",
            a: "**Curated honeymoon planning** focuses on your emotional needs as a couple. It's a personalized approach that creates a peaceful space for you to relax and reconnect.",
          },
          {
            q: "Why should we consider a honeymoon without a rigid itinerary?",
            a: "A **honeymoon without a rigid itinerary** offers freedom and spontaneity. You can wake up and decide what to do, enjoying the moment. It's a chance to slow down and enjoy each other's company, unlike rushing to see everything at someone else's pace.",
          },
          {
            q: "How does slow honeymoon travel help us in learning to live with a partner?",
            a: "Your honeymoon is a start to your life together. Slow travel gives you space to adjust to each other. It's a chance to connect deeply in a peaceful setting, away from the crowds.",
          },
          {
            q: "We feel completely drained after our wedding ceremonies. Is post-wedding fatigue normal?",
            a: "Yes, it's very common. The stress of planning a wedding can leave you exhausted. A luxury honeymoon should be a chance to rest and recharge, not another stressful experience.",
          },
          {
            q: "How can we avoid decision fatigue once our journey begins?",
            a: "Letting experts handle your travel can ease your mind. They take care of the details, so you don't have to. This way, you can focus on enjoying each other's company without stress.",
          },
          {
            q: "Why is prioritizing romance & slowness better than a traditional sightseeing tour?",
            a: "Traditional tours can be overwhelming. They focus on seeing many places quickly. But the best memories come from quiet moments and unplanned days. Prioritizing **romance & slowness** makes your honeymoon a truly refreshing experience.",
          },
        ],
      },
    ],
  },

  {
    slug: "why-travel-feels-different-after-burnout",
    title: "Why Travel Feels Different After Burnout",
    category: "BURNOUT",
    date: "MAY 26, 2026",
    sortDate: "2026-05-26",
    readTime: 4,
    excerpt:
      "Research the flights. Compare 14 hotels. Read 73 reviews. Congratulations — you've turned your holiday into another project. There's a different way.",
    heroImage: "/images/journal/burnout-hero.jpg",
    heroAlt: "A laptop sitting in the middle of an open field",
    author: "Tanya, L&F Founder",
    authorImage: "/images/Tanya.png",
    body: [
      {
        type: "p",
        text: "Ever noticed how some holidays don't hit the same anymore? You spend weeks planning one. You finally get there. And by Day 2, you're somehow... still tired.",
      },
      {
        type: "p",
        text: "That's because these days, even taking a break feels like work. Research the flights. Compare 14 hotels. Read 73 restaurant reviews. Figure out which sunset is \"worth it.\" Book everything before someone on Instagram tells you it's overrated.",
      },
      {
        type: "quote",
        text: "Congratulations. You've successfully turned your holiday into another project.",
      },
      {
        type: "p",
        text: "We call it being busy. We call it hustle. We call it adulthood. But maybe it's just burnout, and guys, holidays shouldn't be stressful — they need to have the ability to surprise you!",
      },
      { type: "h2", text: "Burnout Doesn't Always Look Like a Breakdown" },
      {
        type: "p",
        text: "Most burnout isn't dramatic. It's forgetting what it feels like to be excited. It's answering emails while making coffee. Listening to podcasts at 2x speed. Feeling guilty for taking a nap. *Even your \"rest\" starts feeling productive.*",
      },
      { type: "p", text: "Somewhere along the way, we forgot that doing nothing is allowed." },
      {
        type: "image",
        src: "/images/journal/burnout-breakdown.jpg",
        alt: "Resting in an unexpected place, without a plan",
      },
      { type: "h2", text: "Hello! Your Brain Is Exhausted From Deciding" },
      {
        type: "p",
        text: "Think about how many decisions you make before lunch. What to wear. What to reply. What to eat. Whether to go to the gym. Which notification deserves your attention.",
      },
      {
        type: "p",
        text: "**Then you book a holiday... and make another hundred decisions.**",
      },
      {
        type: "p",
        text: "Sometimes what we're craving isn't another destination. It's fewer decisions.",
      },
      { type: "h2", text: "Why Slow Travel Feels Different" },
      {
        type: "p",
        text: "Slow travel isn't about seeing less. It's about feeling more. Long breakfasts that turn into conversations. An afternoon with absolutely no plans. Walking without checking Google Maps every five minutes.",
      },
      {
        type: "p",
        text: "Saying yes because something feels interesting to you, not because it's ranked #1 on TripAdvisor. It's surprisingly difficult to feel burnt out when your biggest decision is whether to order another coffee.",
      },
      { type: "h2", text: "The Real Luxury" },
      {
        type: "p",
        text: "Luxury isn't always a five-star hotel. Sometimes it's waking up without an alarm. Closing your laptop before sunset. Not checking Slack. Not wondering what comes next because someone has already taken care of it. The best trips don't just change your location. They change your pace.",
      },
      { type: "h2", text: "What If Your Next Trip Required Almost No Decisions?" },
      {
        type: "p",
        text: "We started thinking about this after realizing something simple: most people don't need help booking a holiday. They need help switching off.",
      },
      {
        type: "p",
        text: "That's why we've been building what we call **Decision Detox Trips**.",
      },
      {
        type: "p",
        text: "Before you travel, we spend time understanding you, how you like to travel, what kind of pace you enjoy, whether you're traveling solo, with your partner, or with friends, and what you're hoping to get out of the trip.",
      },
      { type: "p", text: "Then we take over." },
      {
        type: "p",
        text: "We choose the route, recommend the stays, plan the flow of your days, reserve the restaurants, and even sprinkle in a few surprise experiences you'll only find out about 24 hours before they happen.",
      },
      {
        type: "p",
        text: "The goal isn't to keep you busy. It's to free you from constantly having to decide what's next. Some mornings you'll wake up with nowhere you *have* to be. Some afternoons will be left intentionally empty. Some evenings will surprise you.",
      },
      {
        type: "quote",
        text: "All you need to do is wander, explore, sleep in, say yes to something new, and let yourself experience a place without trying to optimise every moment of it.",
      },
      {
        type: "p",
        text: "It sounds unfamiliar because we've become so used to planning every minute of our lives. But that's exactly why it works. Maybe your next trip doesn't need a bigger itinerary. Maybe it just needs fewer decisions.",
      },
      {
        type: "image",
        src: "/images/journal/honeymoon-romance.jpg",
        alt: "Watching the sunset with nowhere else to be",
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            q: "What are burnout recovery trips?",
            a: "They're thoughtfully curated trips designed to reduce decision fatigue, slow your pace, and create space for genuine rest, not just another packed holiday.",
          },
          {
            q: "Can travel actually help burnout?",
            a: "Travel isn't a cure, but slowing down, spending time in nature, reducing daily decisions, and stepping away from routine can help you mentally and emotionally reset.",
          },
          {
            q: "What is slow travel?",
            a: "Slow travel focuses on quality over quantity. Fewer places, deeper experiences, meaningful conversations, and enough free time to actually enjoy where you are.",
          },
          {
            q: "Is slow travel only for long vacations?",
            a: "Not at all. Even a long weekend can feel restorative when you remove the pressure to constantly be doing something.",
          },
        ],
      },
    ],
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}

export function getSortedJournalPosts(): JournalPost[] {
  return [...journalPosts].sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1));
}
