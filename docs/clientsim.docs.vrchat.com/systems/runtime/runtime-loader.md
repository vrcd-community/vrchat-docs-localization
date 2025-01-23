---
upstreamCommit: 4d76fd612a37de18fd85c39062bade59afffb7cf
---

# RuntimeLoader
The RuntimeLoader is a static class responsible for starting ClientSim on entering playmode. It uses the InitializeOnLoad Unity hook to check the settings instance to see if ClientSim should start, and creates an instance of ClientSimMain. This class also handles deleting editor-only objects in the scene. In order to allow for testability of ClientSim, a few methods are provided to set test settings and event dispatcher overrides.