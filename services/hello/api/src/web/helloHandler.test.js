import helloHandler from "./helloHandler";

test("hello", () => {
  const mockRequest = jest.fn();
  const mockReply = {
    code: jest.fn().mockImplementation((code) => {
      send: jest.fn();
    }),
  };
  //helloHandler(mockRequest, mockReply);
  //expect(mockReply.mock.calls.length).toBe(1);
});
