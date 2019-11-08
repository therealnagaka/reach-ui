import { fireEvent } from "@testing-library/react";

export const keycodes = [
  {
    key: "0",
    code: [48, 96]
  },
  {
    key: "1",
    code: [49, 97]
  },
  {
    key: "2",
    code: [50, 98]
  },
  {
    key: "3",
    code: [51, 99]
  },
  {
    key: "4",
    code: [52, 100]
  },
  {
    key: "5",
    code: [53, 101]
  },
  {
    key: "6",
    code: [54, 102]
  },
  {
    key: "7",
    code: [55, 103]
  },
  {
    key: "8",
    code: [56, 104]
  },
  {
    key: "9",
    code: [57, 105]
  },
  {
    key: "Backspace",
    code: 8
  },
  {
    key: "Tab",
    code: 9
  },
  {
    key: "Enter",
    code: 13
  },
  {
    key: "Shift",
    code: 16
  },
  {
    key: "Control",
    code: 17
  },
  {
    key: "Alt",
    code: 18
  },
  {
    key: "Meta",
    code: 224
  },
  {
    key: "Pause",
    code: 19
  },
  {
    key: "CapsLock",
    code: 20
  },
  {
    key: "Escape",
    code: 27
  },
  {
    key: " ",
    code: 32
  },
  {
    key: "PageUp",
    code: 33
  },
  {
    key: "PageDown",
    code: 34
  },
  {
    key: "End",
    code: 35
  },
  {
    key: "Home",
    code: 36
  },
  {
    key: "ArrowLeft",
    code: 37
  },
  {
    key: "ArrowUp",
    code: 38
  },
  {
    key: "ArrowRight",
    code: 39
  },
  {
    key: "ArrowDown",
    code: 40
  },
  {
    key: "Insert",
    code: 45
  },
  {
    key: "Delete",
    code: 46
  },
  {
    key: "A",
    code: 65
  },
  {
    key: "a",
    code: 65
  },
  {
    key: "B",
    code: 66
  },
  {
    key: "b",
    code: 66
  },
  {
    key: "C",
    code: 67
  },
  {
    key: "c",
    code: 67
  },
  {
    key: "D",
    code: 68
  },
  {
    key: "d",
    code: 68
  },
  {
    key: "E",
    code: 69
  },
  {
    key: "e",
    code: 69
  },
  {
    key: "F",
    code: 70
  },
  {
    key: "f",
    code: 70
  },
  {
    key: "G",
    code: 71
  },
  {
    key: "g",
    code: 71
  },
  {
    key: "H",
    code: 72
  },
  {
    key: "h",
    code: 72
  },
  {
    key: "I",
    code: 73
  },
  {
    key: "i",
    code: 73
  },
  {
    key: "J",
    code: 74
  },
  {
    key: "j",
    code: 74
  },
  {
    key: "K",
    code: 75
  },
  {
    key: "k",
    code: 75
  },
  {
    key: "L",
    code: 76
  },
  {
    key: "l",
    code: 76
  },
  {
    key: "M",
    code: 77
  },
  {
    key: "m",
    code: 77
  },
  {
    key: "N",
    code: 78
  },
  {
    key: "n",
    code: 78
  },
  {
    key: "O",
    code: 79
  },
  {
    key: "o",
    code: 79
  },
  {
    key: "P",
    code: 80
  },
  {
    key: "p",
    code: 80
  },
  {
    key: "Q",
    code: 81
  },
  {
    key: "q",
    code: 81
  },
  {
    key: "R",
    code: 82
  },
  {
    key: "r",
    code: 82
  },
  {
    key: "S",
    code: 83
  },
  {
    key: "s",
    code: 83
  },
  {
    key: "T",
    code: 84
  },
  {
    key: "t",
    code: 84
  },
  {
    key: "U",
    code: 85
  },
  {
    key: "u",
    code: 85
  },
  {
    key: "V",
    code: 86
  },
  {
    key: "v",
    code: 86
  },
  {
    key: "W",
    code: 87
  },
  {
    key: "w",
    code: 87
  },
  {
    key: "X",
    code: 88
  },
  {
    key: "x",
    code: 88
  },
  {
    key: "Y",
    code: 89
  },
  {
    key: "y",
    code: 89
  },
  {
    key: "Z",
    code: 90
  },
  {
    key: "z",
    code: 90
  },
  {
    key: "Clear",
    code: 12
  },
  {
    key: "*",
    code: 106
  },
  {
    key: "+",
    code: 107
  },
  {
    key: "-",
    code: [109, 189]
  },
  {
    key: ".",
    code: [110, 190]
  },
  {
    key: "/",
    code: [111, 191]
  },
  {
    key: "=",
    code: [61, 187]
  },
  {
    key: "F1",
    code: 112
  },
  {
    key: "F2",
    code: 113
  },
  {
    key: "F3",
    code: 114
  },
  {
    key: "F4",
    code: 115
  },
  {
    key: "F5",
    code: 116
  },
  {
    key: "F6",
    code: 117
  },
  {
    key: "F7",
    code: 118
  },
  {
    key: "F8",
    code: 119
  },
  {
    key: "F9",
    code: 120
  },
  {
    key: "F10",
    code: 121
  },
  {
    key: "F11",
    code: 122
  },
  {
    key: "F12",
    code: 123
  },
  {
    key: "NumLock",
    code: 144
  },
  {
    key: "ScrollLock",
    code: 145
  },
  {
    key: ";",
    code: 186
  },
  {
    key: ",",
    code: 188
  },
  {
    key: "`",
    code: 192
  },
  {
    key: "[",
    code: 219
  },
  {
    key: "\\",
    code: 220
  },
  {
    key: "]",
    code: 221
  },
  {
    key: "'",
    code: 222
  }
];

/**
 * For testing keyboard events, we need to provide both the key pressed and the
 * character code. However, we pretty much always just use event.key for firing
 * key events in Reach UI. Additionally, some key characters have multiple codes
 * (e.g.: number and math keys whose codes on the numpad are different than the
 * codes above the alpha keys). We usually want to fire these test events twice
 * and test to make sure the expected behavior is the same for both. We can
 * simplify this so we don't need to look up `key.which` every time we want to
 * test key events.
 */
export function fireTestKeyEvent(fn, domNode, key) {
  let keyPressed = keycodes.find(({ key: k }) => key === k);
  if (keyPressed) {
    if (Array.isArray(keyPressed.code)) {
      keyPressed.code.forEach(code => {
        fn(domNode, { key: keyPressed.key, code });
      });
      return;
    }
    fn(domNode, { key: keyPressed.key, code: keyPressed.code });
  } else {
    throw Error("Invalid key provided to `getEventKey`");
  }
}
