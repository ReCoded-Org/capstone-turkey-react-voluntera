import PropTypes from 'prop-types';

export default function InputField({
  label,
  id,
  type,
  placeholder,
  icon,
  handleChange,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <i className={`ri-${icon} rounded-3xl`} />
        </div>
        <input
          type={type}
          id={id}
          name={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
}
InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  handleChange: PropTypes.func,
};

InputField.defaultProps = {
  label: '',
  id: '',
  type: '',
  placeholder: '',
  icon: '',
  handleChange: () => {},
};
