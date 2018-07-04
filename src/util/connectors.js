import { Connect, SimpleSigner } from 'uport-connect';
export const uport = new Connect('React Uport Truffle Boilerplate', {
  clientId: '2oxS4ymxLRz6kZUVvpdC2TVa1xWgc7bGnEF',
  network: 'rinkeby',
  signer: SimpleSigner('d7a3794afd14ebbc068a284271e7b8a5d4e3fc6e20b0899a21c971efc6a649fc')
});
export const web3 = uport.getWeb3();
