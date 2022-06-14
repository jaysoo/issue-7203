import styles from './index.module.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Spring, animated } from 'react-spring'
import { Testlib } from '@acme/testlib';

export function Index() {
  return (
    <>
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}>
          <Testlib />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Index;
