import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Skills = styled.div`
  ${tw`flex flex-wrap w-full`};
`;

export const Skill = styled.div`
  ${tw`w-full sm:w-1/2`};
`;

export const Logo = styled.div`
  ${tw`flex items-center mr-auto text-indigo-900 hover:text-indigo-900 mb-6`};
`;

export const Text = styled.h1`
  ${tw`text-lg`};
`;

export const Image = styled.figure`
  ${tw`w-16 h-16 mr-3 border border-teal-400 rounded-full`};

  img {
    ${tw`border-4 border-white rounded-full`};
  }
`;
