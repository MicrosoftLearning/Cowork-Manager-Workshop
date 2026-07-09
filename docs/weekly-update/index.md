---
description: Have Cowork prep you before every 1:1 and draft the recap after - built once for one report, then scaled to your whole team.
time: 20
---

# 🤝 Flight 02: One-on-One Prep with Cowork

**Cleared for takeoff.** On your last flight you got oriented and handed Cowork a full team-meeting setup. Now you'll point it at something you redo every single week: your one-on-ones.

You'll build a 1:1 that **preps you before** the meeting and **writes its own recap after** - set up once for a single direct report, then replicated across your whole team with one instruction.

## What You'll Produce {#what-youll-produce}

By the end of this flight, Copilot Cowork will have:

- ✅ Set up a recurring, auto-transcribed 1:1 meeting
- ✅ Posted a **prep brief** to your Teams 15 minutes before each meeting
- ✅ Drafted a **recap** from the transcript that sends only after your approval
- ✅ Replicated the whole setup across your team from a single prompt

## The Scenario {#the-scenario}

Good 1:1s take prep you rarely have time for: what did they raise last time, what's still open, what can you unblock? And afterward, a clear recap with owners and due dates often never gets written.

You'll hand both ends to Cowork. It reconstructs the prep from your own Microsoft 365 activity and posts it before the meeting, then turns the transcript into a follow-up you approve before it sends. You'll build it for one report first, then scale it to everyone.

> [!TIP]
> **The big idea:** Only two of the three pieces are skills - the meeting itself is just a calendar action. Build it once for one direct report, then tell Cowork to replicate it for the rest of your team.

## Before You Start - Add the Two Skills {#add-the-skills}

This flight uses two Cowork skills: **1:1 Prep** and **1:1 Recap**. Add them before you begin.

1. **Download both skill files** using the buttons below. Each opens in a new tab so you can save it wherever you keep your downloads.

    <!-- markdownlint-disable MD033 -->
    <div class="skill-steps">
      <div class="skill-step">
        <span class="skill-step-num">1</span>
        <div class="skill-step-body">
          <span class="skill-step-title">1:1 Prep skill</span>
          <p>Posts a pre-meeting brief to your Teams before each 1:1.</p>
          <a class="skill-download" href="/Cowork-Manager-Workshop/one-on-one-prep-skill.txt" download="one-on-one-prep-SKILL.md" target="_blank" rel="noreferrer">⬇️ Download 1:1 Prep</a>
        </div>
      </div>
      <div class="skill-step">
        <span class="skill-step-num">2</span>
        <div class="skill-step-body">
          <span class="skill-step-title">1:1 Recap skill</span>
          <p>Drafts the post-meeting follow-up from the transcript for your approval.</p>
          <a class="skill-download" href="/Cowork-Manager-Workshop/one-on-one-recap-skill.txt" download="one-on-one-recap-SKILL.md" target="_blank" rel="noreferrer">⬇️ Download 1:1 Recap</a>
        </div>
      </div>
    </div>
    <!-- markdownlint-enable MD033 -->

1. **Open your Cowork skills folder** in File Explorer:

    ```text
    C:\Users\<YourAlias>\OneDrive - Microsoft\Documents\Cowork\skills
    ```

    If a `skills` folder isn't already there, create one.

1. **Create a folder for each skill** inside it - one named `one-on-one-prep` and one named `one-on-one-recap`.

1. **Move each downloaded file into its matching folder and rename it to `SKILL.md`.** You should end up with `skills\one-on-one-prep\SKILL.md` and `skills\one-on-one-recap\SKILL.md`.

1. **Open or refresh Cowork.** Both skills are now ready to use by name.

1. **Confirm it worked.** In Cowork, ask:

    ```text
    What skills do I have?
    ```

    You should see **1:1 Prep** and **1:1 Recap** listed, alongside any other skills you've added.

> [!NOTE]
> **Not showing up?** Make sure each `SKILL.md` sits inside its own folder whose name matches the skill, let OneDrive finish syncing (green checkmark), then reopen Cowork.

## The Outcome - What an Automated 1:1 Looks Like {#the-outcome}

| Stage | What happens |
| --- | --- |
| **Before the 1:1** | A prep brief lands in your Teams 15 minutes before the meeting - what your report raised, open items, and where you can unblock or accelerate. |
| **During** | The meeting records and transcribes automatically, so you can stay focused on the conversation. |
| **After the 1:1** | A recap drafts itself from the transcript. You review, edit, and approve - then it goes to your report. Personal chat is left out. |

## Exercise 2.1 - Set Up the Recurring 1:1 + Transcription {#exercise1-recurring-1-1}

Start with one weekly Teams meeting that runs all year. Cowork creates the series and the Teams link; transcription is what powers the recap later.

> [!NOTE]
> Cowork adapts to the context it has, so it won't behave identically for everyone. Depending on what it already knows - or what permissions are set up - it may or may not open an action window or ask a clarifying question before it runs. If your experience doesn't match the steps exactly, that's expected, not a mistake.

1. Open [Microsoft 365 Copilot](https://m365.cloud.microsoft/chat/), select **Cowork**, and start a **New task**.

1. In the prompt field, paste the following, replacing the placeholders in `<angle brackets>`:

    ```text
    Set up a recurring 30-minute 1:1 with <insert direct report> every <day and time>,
    starting the week of July 20, 2026, and ending June 30, 2027, as a Teams meeting.
    ```

1. Send the prompt and let Cowork create the recurring series and the Teams link.

> [!IMPORTANT]
> **One manual step - don't skip this.** In Teams, open the 1:1 series → **Meeting options** → turn on **Record and transcribe automatically** → **Save**. One toggle covers every occurrence - it's a one-time setting on the series, not per meeting. Without it, the recap in Exercise 2.3 has no transcript to work from.

## Exercise 2.2 - The Prep Brief That Beats You to the Meeting {#exercise2-prep-brief}

The **1:1 Prep** skill scans what your report raised via Teams and email since your last 1:1, carries open action items forward, suggests focus areas, flags a win to recognize, and posts a brief to your Teams **15 minutes before** the meeting.

The brief that lands in **your** Teams includes:

- What `<direct report>` raised since your last 1:1
- Suggested focus areas
- Where you can help unblock or accelerate
- A win to recognize
- Questions to ask

1. **Run it once as a test.** In Cowork, paste:

    ```text
    Use my 1:1 Prep skill to prep for my next 1:1 with <direct report>.
    ```

1. Review the brief Cowork posts to your Teams.

    > [!NOTE]
    > On a fresh setup the brief may be short - it only reflects what your report has actually raised, and empty sections are left out by design. The brief posts as a Teams message to **you**, so check your own chat.

1. **Now put it on autopilot.** Schedule the same skill to run before each meeting:

    ```text
    Every <day + time that is 15 minutes before the meeting time>, run my 1:1 Prep skill
    for <direct report> and post the brief to my Teams.
    ```

> [!TIP]
> **Why 15 minutes before?** The meeting is a fixed weekly slot, so a scheduled prompt 15 minutes earlier lands your brief right on time - every week, automatically.

## Exercise 2.3 - The Recap That Writes Itself {#exercise3-recap}

The **1:1 Recap** skill reads the meeting transcript, excludes the personal opening, splits action items into **yours vs. theirs** with due dates, captures decisions and the support you committed to, and shows you a draft to edit - sending only on your approval.

The recap that goes to your **report** (after you approve) includes:

- Key discussion points
- Decisions
- Action items - yours vs. theirs
- Support you will provide
- Focus for your next 1:1

1. **Draft it after the call:**

    ```text
    Use my 1:1 Recap skill to draft the follow-up for <day, date and time of last 1:1>
    1:1 with <direct report>.
    ```

1. **Edit with Cowork** by just describing the change, for example:

    ```text
    Drop the last action item and add a Friday due date to the first one.
    ```

1. **Approve the send:**

    ```text
    Looks good. Send it to <direct report>.
    ```

> [!IMPORTANT]
> **You stay in control.** Nothing reaches your report until you say send. The recap is run on-demand after the call - it is deliberately not scheduled - and the personal opening is left out automatically.

## Exercise 2.4 - Scale to Your Team {#exercise4-scale}

You built it for one report. Now roll it out to everyone with a single instruction - both skills already take the report's name as input, so nothing gets rewritten.

1. In Cowork, paste:

    ```text
    Now do the same for the rest of my team. Set up the recurring 1:1s, the prep schedule,
    and the recap workflow for <list your remaining team members>.
    ```

> [!TIP]
> One report proves the pattern. One instruction rolls it out to the whole team. Before you go wide, be transparent with your team about how you're preparing for 1:1s, and let the process run for 2-4 weeks with a single report so you can tune the two skills to your voice.

## What Done Looks Like {#what-done-looks-like}

A successful run looks like:

- A recurring, auto-transcribed 1:1 series on your calendar
- A prep brief that arrives in your Teams 15 minutes before each meeting
- A recap that drafts itself from the transcript and sends only after your approval
- A single prompt that replicates the whole setup across your team

Quick debrief:

- Did the prep brief surface something you'd have missed going in cold?
- How would you describe the approval experience - prep vs. recap - to a colleague?
- Which other recurring write-up could you hand off the same way?

## Flight Complete {#flight-complete}

You turned your 1:1s into a loop that preps you before and recaps for you after - then scaled it across your team from one instruction.

What you saw in action:

✅ **Prep that beats you to the meeting**: Cowork rebuilt the context from your own Microsoft 365 activity and posted it on schedule.

✅ **A recap with a human in the loop**: The draft assembled itself from the transcript, but nothing sent until you approved it.

✅ **Build once, scale everywhere**: One report proved the pattern; one prompt rolled it out to the team.

The two skills are a starting point, not a finish line. On your [next flight](/make-it-your-own/) you'll make Cowork your own - teaching it to write in your voice by building a custom skill.
