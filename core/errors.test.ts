import { CommandNotFoundError, DiscordApiClientNotSetError, InvalidInteractionTypeError, NotImplementedError, UnauthorizedError } from "./errors";

describe("NotImplementedError", () => {
  it("should be able to create a NotImplementedError", () => {
    const error = new NotImplementedError();
    expect(error).toBeDefined();
    expect(error.message).toBe("Not implemented");
  });
});

describe("CommandNotFoundError", () => {
  it("should be able to create a CommandNotFoundError", () => {
    const error = new CommandNotFoundError();
    expect(error).toBeDefined();
    expect(error.message).toBe("Command not found");
  });

  it("should be able to create a CommandNotFoundError with a name", () => {
    const error = new CommandNotFoundError("test");
    expect(error).toBeDefined();
    expect(error.message).toBe("Command test not found");
  });
});

describe("InvalidInteractionTypeError", () => {
  it("should be able to create a InvalidInteractionTypeError", () => {
    const error = new InvalidInteractionTypeError();
    expect(error).toBeDefined();
    expect(error.message).toBe("Invalid interaction type");
  });
});

describe("UnauthorizedError", () => {
  it("should be able to create a UnauthorizedError", () => {
    const error = new UnauthorizedError();
    expect(error).toBeDefined();
    expect(error.message).toBe("Unauthorized");
  });
});

describe("DiscordApiClientNotSetError", () => {
  it("should be able to create a DiscordApiClientNotSetError", () => {
    const error = new DiscordApiClientNotSetError();
    expect(error).toBeDefined();
    expect(error.message).toBe("DiscordApiClient not set");
  });
});