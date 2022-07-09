export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div className='text-blue-500 text-2xl font-bold'>{sampleTextProp}</div>
  );
};

export default BaseTemplate;
