import helloHandler from "./helloHandler";

test("hello", () => {
  const mockRequest = jest.fn();
  const mockReply = {
    code: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
  };
  helloHandler(mockRequest, mockReply);
  expect(mockReply.code.mock.calls.length).toBe(1);
  expect(mockReply.code.mock.calls[0][0]).toBe(200);
  expect(mockReply.send.mock.calls.length).toBe(1);
  expect(mockReply.send.mock.calls[0][0].message).toBe("Hello, World!");
});
