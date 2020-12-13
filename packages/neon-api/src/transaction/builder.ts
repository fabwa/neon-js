import { tx, sc, u } from "@cityofzion/neon-core";

export class TransactionBuilder {
  private _config: Partial<tx.TransactionLike>;

  public constructor(config: Partial<tx.TransactionLike> = {}) {
    this._config = config;
  }

  /**
   * Add signers
   */
  public addSigners(...signers: tx.SignerLike[]): this {
    this._config.signers = [...(this._config.signers || []), ...signers];
    return this;
  }

  /**
   * You can add multiple intents to the transaction
   */
  public addContractCall(
    ...contractCalls: (sc.ContractCall | sc.ContractCallJson)[]
  ): this {
    this._config.script =
      this._config.script || "" + sc.createScript(...contractCalls);
    return this;
  }

  /**
   * Add an attribute.
   * @param usage - The usage type. Do refer to txAttrUsage enum values for all available options.
   * @param data - The data as hexstring.
   */
  public addAttributes(...attrs: tx.TransactionAttributeLike[]): this {
    this._config.attributes = [...(this._config.attributes || []), ...attrs];
    return this;
  }

  public setSystemFee(fee: u.BigInteger): this {
    this._config.systemFee = fee;
    return this;
  }

  public setNetworkFee(fee: u.BigInteger): this {
    this._config.networkFee = fee;
    return this;
  }

  public build(): tx.Transaction {
    return new tx.Transaction(this._config);
  }
}