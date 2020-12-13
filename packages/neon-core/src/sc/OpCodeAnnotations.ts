import { OpCode } from "./OpCode";

export interface OpCodeAnnotation {
  /** Number of bytes to read as params. */
  operandSize?: number;
  /** Number of bytes to read to get the number that is the bytes to read as params. */
  operandSizePrefix?: number;
}

/** Annotation details for OpCode. Tracks neo-vm/OpCode.cs */
export const OpCodeAnnotations: Record<OpCode, OpCodeAnnotation> = {
  [OpCode.PUSHINT8]: { operandSize: 1 },
  [OpCode.PUSHINT16]: { operandSize: 2 },
  [OpCode.PUSHINT32]: { operandSize: 4 },
  [OpCode.PUSHINT64]: { operandSize: 8 },
  [OpCode.PUSHINT128]: { operandSize: 16 },
  [OpCode.PUSHINT256]: { operandSize: 32 },
  [OpCode.PUSHA]: { operandSize: 4 },
  [OpCode.PUSHNULL]: {},
  [OpCode.PUSHDATA1]: { operandSizePrefix: 1 },
  [OpCode.PUSHDATA2]: { operandSizePrefix: 2 },
  [OpCode.PUSHDATA4]: { operandSizePrefix: 4 },
  [OpCode.PUSHM1]: {},
  [OpCode.PUSH0]: {},
  [OpCode.PUSH1]: {},
  [OpCode.PUSH2]: {},
  [OpCode.PUSH3]: {},
  [OpCode.PUSH4]: {},
  [OpCode.PUSH5]: {},
  [OpCode.PUSH6]: {},
  [OpCode.PUSH7]: {},
  [OpCode.PUSH8]: {},
  [OpCode.PUSH9]: {},
  [OpCode.PUSH10]: {},
  [OpCode.PUSH11]: {},
  [OpCode.PUSH12]: {},
  [OpCode.PUSH13]: {},
  [OpCode.PUSH14]: {},
  [OpCode.PUSH15]: {},
  [OpCode.PUSH16]: {},
  [OpCode.NOP]: {},
  [OpCode.JMP]: { operandSize: 1 },
  [OpCode.JMP_L]: { operandSize: 4 },
  [OpCode.JMPIF]: { operandSize: 1 },
  [OpCode.JMPIF_L]: { operandSize: 4 },
  [OpCode.JMPIFNOT]: { operandSize: 1 },
  [OpCode.JMPIFNOT_L]: { operandSize: 4 },
  [OpCode.JMPEQ]: { operandSize: 1 },
  [OpCode.JMPEQ_L]: { operandSize: 4 },
  [OpCode.JMPNE]: { operandSize: 1 },
  [OpCode.JMPNE_L]: { operandSize: 4 },
  [OpCode.JMPGT]: { operandSize: 1 },
  [OpCode.JMPGT_L]: { operandSize: 4 },
  [OpCode.JMPGE]: { operandSize: 1 },
  [OpCode.JMPGE_L]: { operandSize: 4 },
  [OpCode.JMPLT]: { operandSize: 1 },
  [OpCode.JMPLT_L]: { operandSize: 4 },
  [OpCode.JMPLE]: { operandSize: 1 },
  [OpCode.JMPLE_L]: { operandSize: 4 },
  [OpCode.CALL]: { operandSize: 1 },
  [OpCode.CALL_L]: { operandSize: 4 },
  [OpCode.CALLA]: {},
  [OpCode.ABORT]: {},
  [OpCode.ASSERT]: {},
  [OpCode.THROW]: {},
  [OpCode.TRY]: { operandSize: 2 },
  [OpCode.TRY_L]: { operandSize: 8 },
  [OpCode.ENDTRY]: { operandSize: 1 },
  [OpCode.ENDTRY_L]: { operandSize: 4 },
  [OpCode.ENDFINALLY]: {},
  [OpCode.RET]: {},
  [OpCode.SYSCALL]: { operandSize: 4 },
  [OpCode.DEPTH]: {},
  [OpCode.DROP]: {},
  [OpCode.NIP]: {},
  [OpCode.XDROP]: {},
  [OpCode.CLEAR]: {},
  [OpCode.DUP]: {},
  [OpCode.OVER]: {},
  [OpCode.PICK]: {},
  [OpCode.TUCK]: {},
  [OpCode.SWAP]: {},
  [OpCode.ROT]: {},
  [OpCode.ROLL]: {},
  [OpCode.REVERSE3]: {},
  [OpCode.REVERSE4]: {},
  [OpCode.REVERSEN]: {},
  [OpCode.INITSSLOT]: { operandSize: 1 },
  [OpCode.INITSLOT]: { operandSize: 2 },
  [OpCode.LDSFLD0]: {},
  [OpCode.LDSFLD1]: {},
  [OpCode.LDSFLD2]: {},
  [OpCode.LDSFLD3]: {},
  [OpCode.LDSFLD4]: {},
  [OpCode.LDSFLD5]: {},
  [OpCode.LDSFLD6]: {},
  [OpCode.LDSFLD]: { operandSize: 1 },
  [OpCode.STSFLD0]: {},
  [OpCode.STSFLD1]: {},
  [OpCode.STSFLD2]: {},
  [OpCode.STSFLD3]: {},
  [OpCode.STSFLD4]: {},
  [OpCode.STSFLD5]: {},
  [OpCode.STSFLD6]: {},
  [OpCode.STSFLD]: { operandSize: 1 },
  [OpCode.LDLOC0]: {},
  [OpCode.LDLOC1]: {},
  [OpCode.LDLOC2]: {},
  [OpCode.LDLOC3]: {},
  [OpCode.LDLOC4]: {},
  [OpCode.LDLOC5]: {},
  [OpCode.LDLOC6]: {},
  [OpCode.LDLOC]: { operandSize: 1 },
  [OpCode.STLOC0]: {},
  [OpCode.STLOC1]: {},
  [OpCode.STLOC2]: {},
  [OpCode.STLOC3]: {},
  [OpCode.STLOC4]: {},
  [OpCode.STLOC5]: {},
  [OpCode.STLOC6]: {},
  [OpCode.STLOC]: { operandSize: 1 },
  [OpCode.LDARG0]: {},
  [OpCode.LDARG1]: {},
  [OpCode.LDARG2]: {},
  [OpCode.LDARG3]: {},
  [OpCode.LDARG4]: {},
  [OpCode.LDARG5]: {},
  [OpCode.LDARG6]: {},
  [OpCode.LDARG]: { operandSize: 1 },
  [OpCode.STARG0]: {},
  [OpCode.STARG1]: {},
  [OpCode.STARG2]: {},
  [OpCode.STARG3]: {},
  [OpCode.STARG4]: {},
  [OpCode.STARG5]: {},
  [OpCode.STARG6]: {},
  [OpCode.STARG]: { operandSize: 1 },
  [OpCode.NEWBUFFER]: {},
  [OpCode.MEMCPY]: {},
  [OpCode.CAT]: {},
  [OpCode.SUBSTR]: {},
  [OpCode.LEFT]: {},
  [OpCode.RIGHT]: {},
  [OpCode.INVERT]: {},
  [OpCode.AND]: {},
  [OpCode.OR]: {},
  [OpCode.XOR]: {},
  [OpCode.EQUAL]: {},
  [OpCode.NOTEQUAL]: {},
  [OpCode.SIGN]: {},
  [OpCode.ABS]: {},
  [OpCode.NEGATE]: {},
  [OpCode.INC]: {},
  [OpCode.DEC]: {},
  [OpCode.ADD]: {},
  [OpCode.SUB]: {},
  [OpCode.MUL]: {},
  [OpCode.DIV]: {},
  [OpCode.MOD]: {},
  [OpCode.SHL]: {},
  [OpCode.SHR]: {},
  [OpCode.NOT]: {},
  [OpCode.BOOLAND]: {},
  [OpCode.BOOLOR]: {},
  [OpCode.NZ]: {},
  [OpCode.NUMEQUAL]: {},
  [OpCode.NUMNOTEQUAL]: {},
  [OpCode.LT]: {},
  [OpCode.LE]: {},
  [OpCode.GT]: {},
  [OpCode.GE]: {},
  [OpCode.MIN]: {},
  [OpCode.MAX]: {},
  [OpCode.WITHIN]: {},
  [OpCode.PACK]: {},
  [OpCode.UNPACK]: {},
  [OpCode.NEWARRAY0]: {},
  [OpCode.NEWARRAY]: {},
  [OpCode.NEWARRAY_T]: { operandSize: 1 },
  [OpCode.NEWSTRUCT0]: {},
  [OpCode.NEWSTRUCT]: {},
  [OpCode.NEWMAP]: {},
  [OpCode.SIZE]: {},
  [OpCode.HASKEY]: {},
  [OpCode.KEYS]: {},
  [OpCode.VALUES]: {},
  [OpCode.PICKITEM]: {},
  [OpCode.APPEND]: {},
  [OpCode.SETITEM]: {},
  [OpCode.REVERSEITEMS]: {},
  [OpCode.REMOVE]: {},
  [OpCode.CLEARITEMS]: {},
  [OpCode.ISNULL]: {},
  [OpCode.ISTYPE]: { operandSize: 1 },
  [OpCode.CONVERT]: { operandSize: 1 },
};