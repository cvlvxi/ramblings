use wasm_bindgen::prelude::*;

pub trait Sorter {
    fn sort<T>(&self, slice: &mut [T])
    where T: Ord;
}

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn dog(some_str: &str) {
    unsafe {
        alert(&format!("{}", some_str));
    }
}

#[wasm_bindgen]
pub struct BubbleSort;

impl Sorter for BubbleSort {
    fn sort<T>(&self, slice: &mut [T])
    where T: Ord + PartialOrd
    {
        let mut swapped = true;
        while swapped {
            swapped = false;
            // Make sure it doesn't do the last element 
            for i in 0..slice.len() -1 {
                let j = i + 1;
                if slice[i] > slice[j] {
                    slice.swap(i, j);
                    swapped = true;
                }
            }
        }
    }

}

impl BubbleSort {
    pub fn dog(&self) {
        println!("Hello");
    }
}

#[test]
fn test_bubble_sort() {
    let mut things = vec![4,2,5,3,1];
    // sort::<_, Bubblesort>(&mut things);

    // Note requires Sorter in scope
    BubbleSort.sort(&mut things);
    assert_eq!(things, &[1,2,3,4,5]);    
}


#[test]
fn test_impl_sorter() {
    struct StdSorter;
    impl Sorter for StdSorter {
        fn sort<T>(&self, slice: &mut [T])
        where T: Ord
        {
            slice.sort();
        }
    }
    let mut things = vec![4,2,3,1];
    // sort::<_, StdSorter>(&mut things);
    StdSorter.sort(&mut things);
    assert_eq!(things, &[1,2,3,4]);
}