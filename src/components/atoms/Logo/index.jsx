import Image from 'next/image';

import { Wrapper } from './styles';

function Logo() {
  return (
    <Wrapper>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href='/'>
        <Image src='/assets/images/logo.svg' alt='kalgory logo' width={225} height={48} />
      </a>
    </Wrapper>
  );
}

export default Logo;
