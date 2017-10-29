# Technical Notes

It's no secret that I've had a ton of things on my mind with this project, and I'm starting to imagine that keeping it in my head is my central problem.  This file / folder is where I'm getting things out of my head, hopefully in a productive way.

## Regarding actions

There's no rule which says Redux action types have to look like this:

```javascript
{
  type: "SOME_WACKY_UPPERCASE_CONSTANT",
  id: 1,
  look: "at how",
  the: "keys are",
  distinct: "to this object"
}
```

Off the top of my head, there's some weird things here, right?  For one, the object itself is unique, there's no real uniformity here.  So any operations on the content of the object would have to be coupled to the thing making the object up.  I guess, in a sense, that's always going to be the case - but there are some mitigations which occur to me.

### Path-based action types

[Check this out][path-to-regexp].  The URI is a really successful resource identifier, why not use it?

```javascript
{
  type: "/search/create/bunnies"
}
```

It has an extra benefit of being comprehensible at a glance, and simple to write.  Of course, there's nothing which says we have to use `type`:

```javascript
{
  uri: "/search/create/bunnies"
}
```

And it's actually not so hard to manufacture and handle internally without creating a bunch of magical strings:

```javascript
import pathToRegexp from 'path-to-regexp'

// The route itself is like a lot of routes we would write, it's just a string
// and everything else can flow outward from a manifest of strings.
//
const CreateSearchPath = '/search/create/:topic'

// Path to Regexp can turn strings into URL helpers, so let's prepare one.
//
const createSearchPath = pathToRegexp.compile(CreateSearchPath)

// A URI creator that turns an entity (in this case, a search topic) into
// a string.  We don't need to know how the routes are structured in the
// code, aside from knowing that it accepts a topic.
//
const searchFor = topic => createSearchPath({ topic })

// Action creator - here the path-based approach comes back to Redux for use in
// our reducers.
//
const search = topic => ({ uri: searchFor(bunnies) })
```

There may be some unnecessary indirection there, but each of those `const` values have merit as an exportable or reusable token, so it's probably arguable.

Now we've also got a pretty concrete link between the way we imagine our Redux actions, and how we imagine things like microservices.  If we're using Redux Saga to handle actions, then things get *really clear*.  Now we've got a single saga (microservice) which listens to a uri (action), and handles it with a generator sequence.

Not to mention that it creates a conceptual coupling between an action set, and an *actual* uri of the application at large.  Imagine being on a page and knowing exactly which options were most likely in use on that page, or needing to create a new page and knowing exactly how to start (from the route inward).

The final argument I've got for this approach is the idea of networks as a first class citizen of URIs.  What if we're running a distributed system, and we have a uri like this:

```javascript
{
  uri: "journaling://adorable-bunnies.haus/search/create/cottontail"
}
```

Now we're being *really clear* that we want to dig around in the adorable bunny site archives for what we want.  So I could imagine this approach being usable for federation, and networked systems at large.

### Consistent payloads

I use this one already, but it's worth explaining myself.  The idea is that I just envelope payloads, so that this:

```javascript
{
  type: "SOME_WACKY_UPPERCASE_CONSTANT",
  id: 1,
  look: "at how",
  the: "keys are",
  distinct: "to this object"
}
```

Starts to look more like this:

```javascript
{
  type: "SOME_WACKY_UPPERCASE_CONSTANT",
  payload: {
    id: 1,
    look: "at how",
    the: "keys are",
    distinct: "to this object"
  }
}
```

I feel like this is an objectively better approach, but of course reality doesn't help me out with this: Type systems for JS like [Flow][flow] have trouble discriminating deep object levels, so they give virtually no assistance for this approach.

## Reusable Reducer Nodes

I've already got one of these (`Showable`) and it seems to be pretty great.  I think there's more.  With or without the other ideas in this file, I believe it's worth investigating reusable nodes in general.

### Record-based Reducer Nodes

There's just some real easy wins in the vein of record-based CRUD operations, things that we wind up doing every time.

* The record store node is a directory of records by id. You would use this to just store records for other parts of an application.
* The record cache node is a directory of record meta-data by id. You would use this to reason about staleness of records, or judge whether or not you should fetch or sync fresh data.
* The record index node, is a list of records, helpful for when you want a filterable or orderable list of records.

### Async Reducer Nodes

The most common async reducer node is probably the fetching state node, which lets us create nodes which tell us whether or not they are in the process of loading something asynchronously, which could either succeed or fail.  These async topics can be lists, components, individual records, etc.  The only thing they need to have in common is that they're trying to communicate some sort of network request.

#### States

* Idle
* Active
* Successful
* Failed

[path-to-regexp]: https://github.com/pillarjs/path-to-regexp
[flow]: https://flow.org
