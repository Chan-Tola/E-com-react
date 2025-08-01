<form action="{{ route('productdetail.destory', $product_detail->id) }}" method="POST" enctype="multipart/form-data">
@csrf
@method('DELETE') <!-- This is the key line -->
<!-- Product ID Field -->
    <div class="mb-6">
        <label for="id" class="block mb-2 text-sm font-medium text-gray-900">
            Product Detail Code:<span class="text-red-500"> {{ $product_detail->id }} </span>
        </label>
    </div>
    <!-- Unit Price Field -->
    <div class="mb-6">
        <label for="unit_price" class="block mb-2 text-sm font-medium text-gray-900">
            Unit Price <span class="text-red-500">*</span>
        </label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span class="text-gray-500 text-sm">$</span>
            </div>
            <input type="number" id="unit_price" name="unit_price" step="0.01" min="0"
                value="{{ $product_detail->unit_price }}"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 p-2.5"
                required>
        </div>
    </div>

    <!-- Admin Notes Field -->
    <div class="mb-6">
        <label for="admin_notes" class="block mb-2 text-sm font-medium text-gray-900">
            Admin Notes
        </label>
        <textarea id="admin_notes" name="admin_notes" rows="4"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">{{ $product_detail->admin_notes }}</textarea>
    </div>

    <!-- Submit Buttons -->
    <div class="flex justify-end pt-4 border-t border-gray-200">
        <button type="button" onclick="closeModal()"
            class="mr-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900">
            Cancel
        </button>
        <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
            Yes
        </button>
    </div>
</form>
