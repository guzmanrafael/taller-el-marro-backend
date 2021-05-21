const { ClientService } = require("../../src/services");
const { ClientRepositoryMock } = require("../mocks");
const {
  ClientModelMock: { client, clients },
} = require("../mocks");

describe("Client Service Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should find a client by id", async () => {
    const ClientRepository = ClientRepositoryMock;
    ClientRepository.get.mockReturnValue(client);

    const _clientService = new ClientService({ ClientRepository });
    const expected = await _clientService.get(client.id);
    expect(expected).toMatchObject(client);
  });

  it("Should return a client collection", async () => {
    const ClientRepository = ClientRepositoryMock;
    ClientRepository.getAll.mockReturnValue(clients);

    const _clientService = new ClientService({ ClientRepository });
    const expected = await _clientService.getAll();
    expect(expected).toMatchObject(clients);
  });

  it("Should update a client by id", async () => {
    const ClientRepository = ClientRepositoryMock;
    ClientRepository.update.mockReturnValue(client);

    const _clientService = new ClientService({ ClientRepository });
    const expected = await _clientService.repository.update(client.id, client);
    expect(expected).toMatchObject(client);
  });

  it("Should delete a client by id", async () => {
    const ClientRepository = ClientRepositoryMock;
    ClientRepository.delete.mockReturnValue(true);

    const _clientService = new ClientService({ ClientRepository });

    const expected = await _clientService.repository.delete(client.id);
    expect(expected).toEqual(true);
  });
});
