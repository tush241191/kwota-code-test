import Project from '../components/cards/project/Project';
import HeaderLayout from '../components/layouts/header/HeaderLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

type Data = {
  title: string;
  description: string;
  material: {
    name: string;
    color: string;
  };
  standard: string;
  price: number;
  credit_balance: number;
  image: string;
};

const Home: NextPageWithLayout = () => {
  const responseData: Data[] = [
    {
      title: 'Rappin recycled paper use project in Estonia',
      description:
        'Rappin is an Estonian paper mill located in Räpina, Southern Estonia. Rappin offers carbon negative packaging products like edge protectors and cardboard.',
      material: {
        name: 'Paper',
        color: '#EAD671',
      },
      standard: 'Gold Standard',
      price: 32,
      credit_balance: 102,
      image:
        'https://images.unsplash.com/photo-1478940020726-e9e191651f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      title: 'PPS recycled plastic use project in Sweden',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      material: {
        name: 'Plastic',
        color: '#80D3F3',
      },
      standard: 'Verified Carbon Standard',
      price: 45,
      credit_balance: 34,
      image:
        'https://s3-alpha-sig.figma.com/img/2564/b264/766be396f35100e66b4826c4305e1cde?Expires=1658102400&Signature=FU5X6g2z~DR3aLWwYPkah9i1-tiTTbMWeFmHYk7GMJp~480I0~DrfFDDMcv0NM~Pnf3sLweW--M8boRihwVfENivnWtkHvh9PDtp8Cd0KmBM0~FFf-TjPbeKASyUVjzHAMQiVi1g9VGYny6ZR8Lrn9yOuRA8L1164~SpwiG~99t0IhpA0hU3C4~XR8ng2IgibNpoz~AMaS42OAMejsIxhsufi-yl3Xab2oh6nJNaw4RgvrQlkolmzwEz10GCc9ERWVrpzmnKRAiw3GAhm~4bwvNS1fh4b8VifUA8LCoLMIM~ffCqAIH0ioT3bJB0CCSpY3fCNAIyjJwMzGJSx3cnyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      title: 'Saldejums recycled metal use project in Latvia',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      material: {
        name: 'Metal',
        color: '#AEAEAE',
      },
      standard: '',
      price: 30,
      credit_balance: 1045,
      image:
        'https://s3-alpha-sig.figma.com/img/7c2b/013b/e96e9ded2cfd4efadf2acd13ee56846a?Expires=1658102400&Signature=BhvC69DjJyg5e7-bLSerlLgtmi4hJ51GLkHahBDNbh2kypUVXrJ8hTp6LCRCp7vfKBVzXXgLaIqvUHu8YG~Gd6YfnSHzkMPNFDPFvDRCfwRVUZEKYNevlwdfso5H8XPwUhMSjWPkXryPLtq7cI9ubyaDNXvBWyVtsFoueOQLXffbmcoKUWGFLO287FUKdaKMcs801Z8jwgTJupobWJXqPE8~giw2peoVnckGbU2zOeLTVCRKC3v1g4ZB5cP89bzJi4a6ZfMi~tkNQWp1zm6uU4QQsesbxFxb7RHiYjcmwIN68D4fFj7vpEbBmjQ9hTscVjYTChyqgTO99HJ9cxjYlw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      title: 'Recycled paper use project in Germany',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      material: {
        name: 'Paper',
        color: '#EAD671',
      },
      standard: 'Gold Standard',
      price: 32,
      credit_balance: 102,
      image:
        'https://s3-alpha-sig.figma.com/img/f374/f7dc/5966d956de9af9404d1ac6de52f25639?Expires=1658102400&Signature=LX3Ga6RbDyVCRmKMFxWERqkOOsjFOVpE5y1~Bokik6zKyqUg3H54pSlL-AzX0mnTuzLD-pKe3I~S206MCkIxD-EtmNt6Z6D6lvKfTL81xWYw0t4QiLWpQmGFsoWHZ4HvKEgL9R3PLlGtfO6wtrs3Z31cOxwEQdcOcBCxjFuyTdh1qxn9YBNedg0lxML73NCz-8inSnkSFbceUPe4dqkKLBevWHtID6iXxy0GSiu2vcFS-0C6pS7yP8bOIbvfERnxw~EcOtge4xtmUNk1p1BPLDuIpB9yGzTrbVHDccAvVwa814cTyZ9u69g8G5IBi-7mDBj240e4631pIOLZWTIZqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      title: 'Recycled timber use project in Africa',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      material: {
        name: 'Timber',
        color: '#B1A696',
      },
      standard: 'Gold Standard',
      price: 32,
      credit_balance: 102,
      image:
        'https://s3-alpha-sig.figma.com/img/e3f6/5c9e/d0aa2d5780c97574ff899c012da27d8d?Expires=1658102400&Signature=hrP-JCURiqJTRDQvvD6PCvnpnpTDmMRFlb1XUtizvEegrX0k4Q8pJAtOUXUWaS6SSIsI85lQa7HcaPmLyEpVnjK-7cIzQQYWczK0ImsrJYHLZBihrgLmjhgr23qSyHqIhk5hzn0fRLoU2iD3OL1Ic1ZJx8jg8wAuGISkfP-q1Z1H0nTaqlQp5P6RFvSg2K56~i-fReSntLoqgJGucyRZXo78854~0JmNzCBciZYn2hQALlRLWszy5aBOrgVFBVGO6GA1Wmk2UPdOwnAfIpxf8XGYTGMVgu8dudgiCWgTOVJqj2y4~p4Yjz4wGWQS3qJ8gzIS2k3wrBO~ZbgpSHHTUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      title: 'Recycled textile use project in UK',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      material: {
        name: 'Textile',
        color: '#EA9571',
      },
      standard: 'Verified Carbon Standard',
      price: 32,
      credit_balance: 102,
      image:
        'https://s3-alpha-sig.figma.com/img/15a4/0e10/98a48debec2c3732cd82f9a631b170bb?Expires=1658102400&Signature=dirVpQNDfySaApKI9NcErs93ZxFKdJeEUTmA5XFXzC5yi0TwWYw4VdFj5dFXo8MECtNLUEBpKi8MTnfC0uPqh4L6rZSllmX66rmu6XIth9ZJ~FnPMHgAfqUsmpMtCB6Ltw1m5zHyF6~xDhVSjMUow7OgdBVauz23Tts2HkWHt7rwvQJ6r9lSIR3iMMkPWvo2nR5XCtLADxf7enOGUcbLF6wUXBOHfDUdHzNY743W1HuA-2iawijz7Lr7OzK-~zSLCgxYZtE6bGC-noTUl5cuLByMyc5dhGtU1fp~yVw5kqmylpIfXkugSQD6BKzb~kcznhtFmWFSxbtyEj~XUlRr6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
  ];
  return (
    <div className='bg-white'>
      <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Offset projects
            </h2>
          </div>
          <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {responseData.map((data) => (
              <Project key={data.title} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <HeaderLayout />
      {page}
    </PrimaryLayout>
  );
};
