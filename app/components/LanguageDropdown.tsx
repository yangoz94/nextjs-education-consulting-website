import { useLanguageDropdown } from "../hooks/useLanguageDropdown";

export function LanguageDropdown() {
  const {
    context,
    LANGUAGES,
    isDropDownOpen,
    setIsDropDownOpen,
    handleOptionClick,
    dropdownRef,
  } = useLanguageDropdown();

  return (
    <div
      ref={dropdownRef}
      className="dropdown lg:dropdown-end dropdown-content  font-bold uppercase tracking-wide lg:tracking-widest text-gray-500 text-[8px]"
    >
      <label
        tabIndex={0}
        className="btn rounded-btn  bg-gray-500 text-gray-100  border-none w-9 h-9  min-h-0 p-0 lg:w-10 lg:h-10 text-[11px] lg:text-[12px]"
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
      >
        {context.language}
      </label>
      {isDropDownOpen && (
        <ul
          tabIndex={0}
          className="menu dropdown-content p-0 rounded-box w-36 lg:w-52 mt-3 "
        >
          {LANGUAGES.map((language) => (
            <li
              key={language.code}
              className="btn rounded-btn my-1 bg-white dark:bg-DARK_SECONDARY_BG_COLOR dark:text-white hover:bg-gray-500 dark:hover:bg-LIGHT_SECONDARY_BG_COLOR text-black hover:text-white dark:hover:text-black text-[12px] border-gray-200 dark:border-gray-600 ring-gray-400 dark:ring-gray-700 ring-1"
              onClick={handleOptionClick}
            >
              {language.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
