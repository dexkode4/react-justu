"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickOutside = void 0;
const react_1 = require("react");
const useClickOutside = (ref, action) => {
    react_1.useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                action();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, action]);
};
exports.useClickOutside = useClickOutside;
//# sourceMappingURL=useClickOutside.js.map