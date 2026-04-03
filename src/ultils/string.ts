// Định nghĩa các kiểu dữ liệu được phép truyền vào
type ClassValue =
  | string // "btn", "text-red-500"
  | Record<string, boolean | undefined>  // { "btn-active": true, "hidden": false }
  | undefined  // không truyền gì
  | null  // null
  | false; // false

// Hàm này nhận vào nhiều class value và trả về một chuỗi class được kết hợp từ các class value được truyền vào
export const cn = (...classes: ClassValue[]): string => {
  return classes
    // Map qua từng class value và trả về tên các class được kích hoạt (có value là true)
    .map((c) => {
        // Nếu c là một string, trả về string đó
      if (typeof c === "string") return c;
      // Nếu c là một object, trả về tên các class được kích hoạt (có value là true)
      if (c && typeof c === "object") {
        // Lấy tất cả các key của object và trả về tên các class được kích hoạt (có value là true)
        return Object.entries(c)
          // Lọc bỏ các giá trị false, undefined, null
          .filter(([, v]) => Boolean(v))
          // Lấy tất cả các key của object và trả về tên các class được kích hoạt (có value là true)
          .map(([k]) => k)
          // Kết hợp các class thành một chuỗi    
          .join(" ");
      }
      // Nếu c là một giá trị khác, trả về chuỗi rỗng
      return "";
    })
    // Lọc bỏ các giá trị false, undefined, null
    .filter(Boolean)
    // Kết hợp các class thành một chuỗi    
    .join(" ");
};