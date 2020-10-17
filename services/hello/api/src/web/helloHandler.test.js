import helloHandler from "./helloHandler";

test("hello", () => {
  const mockRequest = jest.fn();
  const mockReply = {
    code: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
  };
  helloHandler(mockRequest, mockReply);
  expect(mockReply.code.mock.calls.length).toBe(1);
  expect(mockReply.send.mock.calls.length).toBe(1);
});
