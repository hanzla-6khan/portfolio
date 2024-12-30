
import PropTypes from 'prop-types';
export const Title = ({ title, desc }) => {
    return (
        <>      <div className="flex flex-col gap-4 mt-2 font-roboto">
            <h3 className="text-sm uppercase font-light text-designColor tracking-wide">{title}  </h3>
            <h1 className="text-3xl text-gray-300 font-bold capitalize">{desc} </h1>
        </div>
        </>
    )
}
Title.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,

};
