/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head1 = list1;
  let head2 = list2;

  const sortedArray = [];

  while (head1 && head2) {
    if (head1.val < head2.val) {
      sortedArray.push(head1.val);
      head1 = head1.next;
    } else {
      sortedArray.push(head2.val);
      head2 = head2.next;
    }
  }

  while (head1) {
    sortedArray.push(head1.val);
    head1 = head1.next;
  }

  while (head2) {
    sortedArray.push(head2.val);
    head2 = head2.next;
  }

  var root = null;
  var current = null;
  sortedArray.forEach((val) => {
    if (!root) {
      root = { val: val, next: null };
      current = root;
    } else {
      current.next = { val: val, next: null };
      current = current.next;
    }
  });

  return root;
};

const list1 = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};

const list2 = {
  val: 4,
  next: {
    val: 5,
    next: null,
  },
};

console.log(mergeTwoLists(list1, list2));;
