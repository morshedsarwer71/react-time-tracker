import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title, addOn, taskToggle }) => {
 
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text={ taskToggle ? 'Close' : 'Add' } onclick={addOn} /> 
        </header>
    )
}

Header.defaultProps={
    title:'Task Tracker'
}
Header.propTypes={
    title: PropTypes.string.isRequired
}
export default Header
