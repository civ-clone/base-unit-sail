import NavalTransport from '@civ-clone/base-unit-type-naval-transport/NavalTransport';

export class Sail extends NavalTransport {
  capacity() {
    return 3;
  }
}

export default Sail;
