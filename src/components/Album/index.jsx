import PropTypes from 'prop-types';


export default function Album({link, text, cover, altText}) {
    const albumStyle = {
      // Insert styling here
    };
    return (
      <a href={link} target="_blank" rel="noreferrer" style={albumStyle}>
            <img src={cover} className="logo" alt={altText} />
            <p className="albumName">{text}</p>
          </a>
    )
}
  
Album.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};