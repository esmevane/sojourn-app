# Domain Notes

Have you ever put something online, and felt like sharing it with some friends, but not the whole damn world?  Wanted to collaborate, but control the scopes of who can contribute and who could only read?  Wanted to put an idea out there and just keep it for yourself, but have it turn up wherever you were?

All of these things are basically minor inconveniences.  But what about who owns the things we write?  Where does it go when the host is gone, when we're gone?  Are our thoughts gone, too?

The act of journaling with a social component is pretty awful, when you think about it.  We mill a lot of the products of our mind and just hand them out to whoever.  Centralized owners, like Facebook, offer us easier, lower-commitment interaction with each other in exchange for this core substance of our ideas.

It's pretty overwhelming, and binding.  It's hard to pull our thoughts out, too.  What if we've journaled for years on something?  Where do our thoughts go when we want to build something of them?  There's legwork there, too - if we kept a theme running for years and want to collate a book, tough luck.  It's all manual, the entire thing.

How about finding other people's status?  These central services need to convince people into acting useful for advertisers, and so chronological streams of information are a bad thing for them.  They have a core financial motivation to control how all posts are surfaced, and you can't control time, can you?

## What's the point?

The value proposition for Sojourn is that it is a journaling platform which uses a distribution / federation backbone, and first classes things like collating, encryption, and exports.  Sojourn gives you the ability to work in a wiki-like environment, that conforms to your own ideas of how you want to make and distribute notes and writings.

To put it more plainly, it's a techno journal which you can take anywhere you go.

## The core values

* It should be easy to write and share, and also not share.
* Ownership should be simple, security should be invisible.
* The things we share should be safe, but open.

To elaborate:

* Everything is a note.  It's notes, all the way down.  Notes without a home (ambient notes) are
* You own your own distribution.  You can create a book by declaring links between notes.  You can click a button and encrypt a note.  You can make a note public, private, shared to friends, shared to groups, forbidden to groups, or infinitely mirrorable.
* You own your own Sojourn.  It's a wiki-like website management tool, where every page is a note, and obeys all of the note rules.  That means if you set a section of your site up to be mirrorable, other people can sync their own Sojourns up to it.  And others to theirs.
* You can control your writing in a versionable environment, meaning that you can work on drafts (and distribute those, or collaborate on them) without much, or any risk.  If you've got a public note and someone comes along and vandalizes it, you can just forbid the culprit and revert the note.

## Under the hood

We'll get to these systems with a simple approach.  Those things which seem truly complex, in truth, a lot of the technologies exist for them already and we're just going to try leveraging that.  Much of the infrastructure is already out there, open sourced.

The front-end component will be where the bulk of the actual app will exist, though there will need to be a service backing each app, and each hub, in order to make this an actual network.

## To make an apple pie

But, it is a big idea.  So, where, really, to begin?

A successful implementation of Sojourn describes a graph, where every node of the graph is a hub, an identity, an event, or a note.  The edges between the nodes are structures that describe encryption, permissions (licenses), ownership, and versions.

In the beginning, you have the Sojourn client.

### The client (The app)

The client is a standalone thing, which you can access and use at once.  You don't need to be online, tell it about networks, or any of that.  You can make notes, create lists of those notes, save books, enter status updates, and manage wikis, all locally.

The problem here is that local-only notes vanish with the computer they're on.  How do we get our work out into the world at large?

### Hubs

A hub is a service that manages the storage and distribution of events, notes, and local identities. The hub has a concept of an owner, and an administration team, but mostly it obeys the rules given to it by the identities it hosts.

Everything the hub does is exposed through a GraphQL API.  Other than some system-level environment variables required at hub service start, even the settings of the hub are determined through invoking its API.  Absolutely none of the hub's feature set can be interacted with directly, and this boundary is enforced for the sake of enabling stronger distribution.

A hub architecture looks like this:

```
   [System Resources]
-> [Hub Core]
-> [Hub API]
-> [Hub Service]
-> [Hub Client]
-> [Hub Consumers (CLIs, Sojourn, Bots, etc.)]
```

One of the most crucial things a hub enables is the idea of distribution and the enforcement and execution of distribution rules.  The hub uses its own client to interact with peers it knows about, on behalf of identities it knows about, relating to the curation of notes that it knows about.

The hub is the tissue which glues the rest of the domain together.

A hub has a lifecycle.  At its beginning, it is in an **open** state, with no concept of specific settings or ownership, or anything like that.  In this listening, starting state, it can be claimed by anyone (usually by its first ID registration), and then recognizes that person as its owner.

Once a hub has been **claimed**, it changes.  It becomes hardened to unrecognized input, depending on the settings given to it by its owner.  If the owner wants to distribute control to others, the owner can declare other IDs on the hub to be administrators, though the owner remains a singular ID.

Generally hubs will have a permanent persistence layer linked up.  It's important to make sure that as they're designed, a hub

Hubs should obey a Sojourn Hub spec, which is a domain specific superset of the [ActivityPub][activity-pub] spec.  It shouldn't really matter what you write a hub in, or how it works, so long as it obeys the spec.

### Identities (IDs)

An identity is an actor.  Identities are local to a hub, and the hub provides the distribution point for all of the identities which it hosts.  In order to get an identity, you've got to attempt to register it with a hub.  Hubs each have their own rules about what they allow as identities, and in a lot of cases that will be pretty open and relaxed.

#### Are actors users?

They can really be anything.  Neighboring hubs, when they're performing a peer handshake, do so by establishing IDs with each other and then those IDs become a configurable rule set for the interaction between the Hubs.

That is to say, it should be totally cool to have fleets of bots working within Sojourn.  They don't necessarily need to be running around announcing they're bots, and they're allowed to generate content.

Which, understandably in this day and age (I hope), suggests a question of trust.  Who can we trust on a network?  It's tough.

And so, as the central, automation-friendly actor of Sojourn, identities are the tissues of the trust and governance models.

An ID can have several levels of interaction with the Sojourn entities it has available to it:

* Owner - The creator of an entity, or the first person to claim something unclaimed.  Owners should be empowered to easily revert anything non-owners might do.
* Administrator - Someone given advanced permission to interact with an entity (and generally control it).
* Collaborator - Someone given draft submission / collaboration permission for an entity.
* Publisher - Someone given mirroring permission for an entity.
* Consumer - Someone who can consume an entity normally.  This is the most basic, default level.
* Muted - A muted identity is unable to meaningfully interact with any content, but their attempts are recorded.  In other words, it may seem to the ID that they continue to (for example) comment on a conversation, but ultimately no one else will see it.
* Forbidden - All actions with the entity are rejected outright.  The ID is aware that it is rejected.  This is equivalent to a 403.
* Banned - To a banned person, the resource is simply invisible.  This is the equivalent of 404'ing.

All of these permissions cascade outward to all kinds of entities, and describe the relationships in a hierarchical way (i.e., if you're Muted on a Hub, then all of the interactions you have with a hub are muted).  Some entities of note are:

* Notes
* Hubs
* Groups

#### What about groups of IDs?

A group of IDs is, under the hood, an identity itself, but it's an identity which is governed by other identities.  In truth, any identity should be something which could yield to another identity's control, and that might be worth exploring, but the clearest use of that ability is to create a group of identities that mainly work as a hierarchical trust distribution point.
